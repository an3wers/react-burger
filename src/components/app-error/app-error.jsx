import styles from "./app-error.module.css";
import PropTypes from "prop-types";

const AppError = ({ message }) => {
  return (
    <div className="pt-10 pb-10">
      <p className={`${styles.message} text text_type_main-default`}>
        {message ? message : "Произошла ошибка"}
      </p>
    </div>
  );
};

AppError.propTypes = {
  message: PropTypes.string,
};

export default AppError;
