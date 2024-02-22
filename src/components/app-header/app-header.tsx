import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const AppHeader = () => {
  const { user } = useUser();
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.nav}>
        <div
          className={`${styles["nav__links-group"]} ${styles["nav__links-group_left"]}`}
        >
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={[
                  isActive ? `${styles["nav__link_active"]}` : "",
                  `${styles["nav__link"]} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`,
                ].join(" ")}
              >
                <BurgerIcon type={isActive ? "primary" : "secondary"} />
                Конструктор
              </span>
            )}
          </NavLink>
          <NavLink to="/feed">
            {({ isActive }) => (
              <span
                className={[
                  isActive ? `${styles["nav__link_active"]}` : "",
                  `${styles["nav__link"]} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`,
                ].join(" ")}
              >
                <ListIcon type={isActive ? "primary" : "secondary"} />
                Лента заказов
              </span>
            )}
          </NavLink>
        </div>
        <div className={styles.nav__logo}>
          <Logo />
        </div>
        <div
          className={`${styles["nav__links-group"]} ${styles["nav__links-group_right"]}`}
        >
          <NavLink to="/profile">
            {({ isActive }) => (
              <span
                className={[
                  isActive ? `${styles["nav__link_active"]}` : "",
                  `${styles["nav__link"]} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`,
                ].join(" ")}
              >
                <ProfileIcon type={isActive ? "primary" : "secondary"} />
                {user ? user.name : "Личный кабинет"}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
