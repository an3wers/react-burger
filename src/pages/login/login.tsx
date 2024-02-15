import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { useUser } from "../../hooks/useUser";
import React, { useState } from "react";

function LoginPage() {
  const { loginRequest } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setError("");
      setIsSubmitting(true);
      if (!email || !password) {
        throw new Error("Пожалуйста, заполните все поля");
      }
      await loginRequest({ email, password });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={"container pt-10 pb-10"}>
      <div className={styles.container}>
        <h3 className='text text_type_main-medium mb-6'>Вход</h3>
        {error && <p className='text text_type_main-default mb-6'>{error}</p>}
        <form onSubmit={loginHandler} className={styles.form}>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            isIcon={false}
            disabled={isSubmitting}
          />

          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
            disabled={isSubmitting}
          />

          <Button
            htmlType='submit'
            type='primary'
            disabled={isSubmitting}
            size='medium'
          >
            Войти
          </Button>
        </form>

        <p className='text text_type_main-default text_color_inactive mt-20'>
          Вы - новый пользователь?{" "}
          <Link to='/register' className={styles.link}>
            Зарегистрироваться
          </Link>
        </p>

        <p className='text text_type_main-default text_color_inactive mt-4'>
          Забыли пароль?{" "}
          <Link to='/forgot-password' className={styles.link}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
