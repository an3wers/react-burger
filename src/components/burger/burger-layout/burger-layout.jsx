import styles from "./burger-layout.module.css";
import PropTypes from "prop-types";

const BurgerLayout = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};

BurgerLayout.propTypes = {
  children: PropTypes.element,
};

export default BurgerLayout;
