import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from "./reset-password.module.css";
import { useUser } from "../../hooks/useUser";
import { useNavigate, Navigate } from "react-router-dom";
import React, { useState } from "react";

function ResetPasswordPage() {
  const { resetPasswordRequest } = useUser();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const resetHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setError("");
      setIsSubmitting(true);
      if (!password || !token) {
        throw new Error("Пожалуйста, заполните все поля");
      }
      await resetPasswordRequest({ password, token });
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isForgotPassword = localStorage.getItem("isForgotPassword");

  if (!isForgotPassword) {
    return <Navigate to={"/forgot-password"} />;
  }

  return (
    <main className={"container pt-10 pb-10"}>
      <div className={styles.container}>
        <h3 className='text text_type_main-medium mb-6'>
          Восстановление пароля
        </h3>
        {error && <p className='text text_type_main-default mb-6'>{error}</p>}
        <form onSubmit={resetHandler} className={styles.form}>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Введите новый пароль"}
            value={password}
            name={"password"}
            disabled={isSubmitting}
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setToken(e.target.value)}
            value={token}
            name={"token"}
            disabled={isSubmitting}
          />

          <Button
            htmlType='submit'
            type='primary'
            disabled={isSubmitting}
            size='medium'
          >
            Сохранить
          </Button>
        </form>

        <p className='text text_type_main-default text_color_inactive mt-20'>
          Вспомнили пароль?{" "}
          <Link to='/login' className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}

export default ResetPasswordPage;
