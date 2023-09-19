import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Ценообразование</NavLink>
        </li>
        <li>
          <NavLink to="/product">Продукт</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Логин
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;