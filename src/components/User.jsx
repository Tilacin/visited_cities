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

/*
ВЫЗОВ

1) Добавьте "AuthProvider" в "App.jsx`
2) На странице `Login.jsx` вызовите `login()` из контекста
3) Внутри эффекта проверьте, является ли `IsAuthenticated === true`. Если это так, программно перейдите к `/app`
4) В `User.js `, считывает и отображает вошедшего в систему пользователя из контекста (объект `user`). Затем включите этот компонент в `AppLayout.js `
5) Обработайте кнопку выхода из системы, вызвав `logout()' и перейдя обратно к `/`
*/
