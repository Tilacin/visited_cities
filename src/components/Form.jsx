// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "./Button";
import BackButtton from "./BackButtton";

import styles from "./Form.module.css";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {
  const [lat, lng] = useUrlPosition()

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false)
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState()
  const [geocodingError, setGeocodingError] = useState('')

  useEffect(function () {
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true)
        setGeocodingError('')
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
        const data = await res.json()

        if (!data.countryCode) throw new Error("Здесь нет города. Выбери в другом месте 😉")

        setCityName(data.city || data.locality || "")
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
      } catch (error) {
setGeocodingError(error.message)
      } finally {
        setIsLoadingGeocoding(false)
      }
    }
    fetchCityData()
  }, [lat, lng])

  if(isLoadingGeocoding) return <Spinner/>

  if(geocodingError) return <Message message={geocodingError}/>

  return (
    <form className={ styles.form }>
      <div className={ styles.row }>
        <label htmlFor="cityName">Название города</label>
        <input
          id="cityName"
          onChange={ (e) => setCityName(e.target.value) }
          value={ cityName }
        />

      </div>

      <div className={ styles.row }>
        <label htmlFor="date">Когда вы были в { cityName }?</label>
        <input
          id="date"
          onChange={ (e) => setDate(e.target.value) }
          value={ date }
        />
      </div>

      <div className={ styles.row }>
        <label htmlFor="notes">Заметки о вашей поездке в { cityName }</label>
        <textarea
          id="notes"
          onChange={ (e) => setNotes(e.target.value) }
          value={ notes }
        />
      </div>

      <div className={ styles.buttons }>
        <Button type="primary">Добавить</Button>
        <BackButtton />

      </div>
    </form>
  );
}

export default Form;
