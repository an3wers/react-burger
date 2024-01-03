import { useMemo, useState } from "react";
import styles from "./profile.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useUser } from "../../hooks/useUser";

function ProfilePage() {
  const { user, updateRequest } = useUser();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email) {
        throw new Error("Пожалуйста, заполните все поля");
      }
      if (password && password.length < 6) {
        throw new Error("Пожалуйста, введите корректный password");
      }
      setError("");
      setIsSubmitting(false);
      setSuccessMessage("");
      const data = {
        name,
        email,
      };

      if (password) {
        data.password = password;
      }

      await updateRequest(data);
      setSuccessMessage("Профиль сохранен");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    setName(user.name);
    setEmail(user.email);
    setPassword("");
  };

  const hasActionButtons = useMemo(() => {
    return name !== user.name || email !== user.email || password;
  }, [name, email, password]);

  return (
    <div className={styles.container}>
      <form onSubmit={updateProfileHandler} className={styles.form}>
        {error && (
          <p
            style={{ textAlign: "center" }}
            className="text text_type_main-default mb-6"
          >
            {error}
          </p>
        )}
        {successMessage && (
          <p
            style={{ textAlign: "center" }}
            className="text text_type_main-default mb-6"
          >
            {successMessage}
          </p>
        )}
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          icon={"EditIcon"}
          name={"name"}
          disabled={isSubmitting}
        />
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          isIcon={true}
          disabled={isSubmitting}
        />

        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
          placeholder="Пароль"
          icon="EditIcon"
          disabled={isSubmitting}
        />
        {hasActionButtons && (
          <div className={styles["btn-group"]}>
            <Button
              onClick={cancelHandler}
              htmlType="button"
              type="secondary"
              size="medium"
            >
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProfilePage;
