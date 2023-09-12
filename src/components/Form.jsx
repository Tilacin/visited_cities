

import { useState } from "react";
import Button from "./Button";
import BackButtton from "./BackButtton";

import styles from "./Form.module.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {


  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
console.log()
  return (
    <form className={ styles.form }>
      <div className={ styles.row }>
        <label htmlFor="cityName">Название города</label>
        <input
          id="cityName"
          onChange={ (e) => setCityName(e.target.value) }
          value={ cityName }
        />
        {/* <span className={styles.flag}>{emoji}</span> */ }
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
