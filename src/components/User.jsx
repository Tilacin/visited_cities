import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";



function User() {
  const {user, logout} = useAuth()
  const naigate = useNavigate()

  function handleClick() {
    logout()
    naigate("/")
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Добро пожаловать, {user.name}</span>
      <button onClick={handleClick}>Выход</button>
    </div>
  );
}

export default User;

