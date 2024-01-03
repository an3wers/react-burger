import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./profile-layout.module.css";
import { useUser } from "../../hooks/useUser";

const ProfileLayout = () => {
  const location = useLocation();
  const { logoutRequest } = useUser();

  return (
    <div className={`${styles.layout} container`}>
      <aside>
        <ul className={styles.nav}>
          <li className="text text_type_main-medium">
            <NavLink
              className={({ isActive }) =>
                [
                  styles["nav__link"],
                  isActive && location.pathname === "/profile"
                    ? styles["nav__link_active"]
                    : "",
                ].join(" ")
              }
              to={"/profile"}
            >
              Профиль
            </NavLink>
          </li>
          <li className="text text_type_main-medium">
            <NavLink
              className={({ isActive }) =>
                [
                  styles["nav__link"],
                  isActive && location.pathname === "/profile/orders"
                    ? styles["nav__link_active"]
                    : "",
                ].join(" ")
              }
              to={"/profile/orders"}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <button
              onClick={logoutRequest}
              className={`${styles.btn} text text_type_main-medium`}
            >
              Выход
            </button>
          </li>
        </ul>
        {location.pathname === "/profile" && (
          <p className="text text_type_main-small text_color_inactive mt-20">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        )}
        {location.pathname === "/profile/orders" && (
          <p className="text text_type_main-small text_color_inactive mt-20">
            В этом разделе вы можете просмотреть свою историю заказов
          </p>
        )}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
