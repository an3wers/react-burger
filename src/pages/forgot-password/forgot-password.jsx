import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPasswordPage() {
  const { forgotPasswordRequest } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const forgotHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setIsSubmitting(true);
      if (!email) {
        throw new Error("Пожалуйста, заполните email");
      }
      await forgotPasswordRequest({ email });
      navigate("/reset-password");
    } catch (error) {
      setError(error?.message || error.toString());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={"container pt-10 pb-10"}>
      <div className={styles.container}>
        <h3 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h3>
        {error && <p className="text text_type_main-default mb-6">{error}</p>}
        <form onSubmit={forgotHandler} className={styles.form}>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={"Укажите e-mail"}
            name={"email"}
            isIcon={false}
            disabled={isSubmitting}
          />

          <Button
            htmlType="submit"
            type="primary"
            disabled={isSubmitting}
            size="medium"
          >
            Восстановить
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

export default ForgotPasswordPage;
