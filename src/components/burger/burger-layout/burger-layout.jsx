import styles from "./burger-layout.module.css";

const BurgerLayout = ({ children }) => {
  // TODO: Описать propTypes

  return <main className={styles.layout}>{children}</main>;
};

export default BurgerLayout;
