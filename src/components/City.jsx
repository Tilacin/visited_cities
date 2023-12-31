import { useParams} from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButtton from "./BackButtton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams()
  const { getCity, currentCity, isLoading } = useCities()

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );



  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />

  return (
    <div className={ styles.city }>
      <div className={ styles.row }>
        <h6>Название города</h6>
        <h3>
          <span>{ emoji }</span> { cityName }
        </h3>
      </div>

      <div className={ styles.row }>
        <h6>Вы были в { cityName } в</h6>
        <p>{ formatDate(date || null) }</p>
      </div>

      { notes && (
        <div className={ styles.row }>
          <h6>Ваши заметки</h6>
          <p>{ notes }</p>
        </div>
      ) }

      <div className={ styles.row }>
        <h6>Узнать больше</h6>
        <a
          href={ `https://en.wikipedia.org/wiki/${cityName}` }
          target="_blank"
          rel="noreferrer"
        >
          Посмотреть { cityName } в Wikipedia &rarr;
        </a>
      </div>

      <div>
<BackButtton/>
      </div>
    </div>
  );
}

export default City;
