import styles from "./burger-constructor-empty.module.css";
import PropTypes from "prop-types";

const BurgerConstructorEmpty = ({ isHover }) => {
  return (
    <section
      className={`${styles.container} ${isHover && styles.container_hover}`}
    >
      <p className="text text_type_main-default text_color_inactive">
        Перетащите ингредиенты
      </p>
    </section>
  );
};

export default BurgerConstructorEmpty;

BurgerConstructorEmpty.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
