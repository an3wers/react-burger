import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavLink from "./nav-link/nav-link";

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.nav}>
        <div
          className={`${styles["nav__links-group"]} ${styles["nav__links-group_left"]}`}
        >
          <NavLink
            extraClass={`mr-2 ${styles.nav__link_active}`}
            renderIcon={() => <BurgerIcon type="primary" />}
          >
            Конструктор
          </NavLink>
          <NavLink renderIcon={() => <ListIcon type="secondary" />}>
            Лента заказов
          </NavLink>
        </div>
        <div className={styles.nav__logo}>
          <Logo />
        </div>
        <div
          className={`${styles["nav__links-group"]} ${styles["nav__links-group_right"]}`}
        >
          <NavLink renderIcon={() => <ProfileIcon type="secondary" />}>
            Личный кабинет
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
