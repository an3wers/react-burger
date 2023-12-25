import {
  Button,
  EmailInput,
  PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <main className={"container pt-10 pb-10"}>
      <div className={styles.container}>
        <h3 className="text text_type_main-medium mb-6">Вход</h3>
        <form onSubmit={loginHandler} className={styles.form}>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            isIcon={false}
          />

          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
          />

          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </form>

        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы - новый пользователь?{" "}
          <Link to="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </p>

        <p className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?{" "}
          <Link to="/forgot-password" className={styles.link}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
