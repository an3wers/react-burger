import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./reset-password.module.css";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const resetHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main className={"container pt-10 pb-10"}>
      <div className={styles.container}>
        <h3 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h3>
        <form onSubmit={resetHandler} className={styles.form}>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Введите новый пароль"}
            value={password}
            name={"password"}
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setCode(e.target.value)}
            value={code}
            name={"code"}
          />

          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </form>

        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?{" "}
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
