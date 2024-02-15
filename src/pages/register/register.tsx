import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import React, { useState } from "react";

function RegisterPage() {
  const { registerRequest } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const registerHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setError("");
      setIsSubmitting(true);
      if (!email || !password || !name) {
        throw new Error("Пожалуйста, заполните все поля");
      }
      await registerRequest({ name, email, password });
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
        <h3 className='text text_type_main-medium mb-6'>Регистрация</h3>
        {error && <p className='text text_type_main-default mb-6'>{error}</p>}
        <form onSubmit={registerHandler} className={styles.form}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={"name"}
            disabled={isSubmitting}
          />
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
            Зарегистрироваться
          </Button>
        </form>

        <p className='text text_type_main-default text_color_inactive mt-20'>
          Уже зарегистрированы?{" "}
          <Link to='/login' className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}

export default RegisterPage;
