import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
        Вы путешествуете по миру.
          <br />
          Worldwide следит за вашими приключениями.
        </h1>
        <h2>
        Карта мира, которая отслеживает ваши шаги в каждом городе, о котором вы только можете подумать
. Никогда не забывайте о своих замечательных впечатлениях и покажите своим друзьям, как
вы путешествовали по миру.
        </h2>
        <Link to="/login" className="cta">
          Начать
        </Link>
      </section>
    </main>
  );
}
