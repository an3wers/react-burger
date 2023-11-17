import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const NavLink = ({ children, path = "!#", extraClass = "", renderIcon }) => {
  // TODO: Описать propTypes

  const icon = renderIcon();
  return (
    <a
      href={path}
      className={`${styles.nav__link} ${extraClass} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </a>
  );
};

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
