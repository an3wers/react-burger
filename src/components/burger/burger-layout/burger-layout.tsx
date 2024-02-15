import React from "react";
import styles from "./burger-layout.module.css";
import PropTypes from "prop-types";

interface IProps {
  children: React.ReactNode;
}

const BurgerLayout = ({ children }: IProps) => {
  return <main className={styles.layout}>{children}</main>;
};

BurgerLayout.propTypes = {
  children: PropTypes.element,
};

export default BurgerLayout;
