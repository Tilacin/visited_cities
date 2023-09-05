import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
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
      </section>
    </main>
  );
}
