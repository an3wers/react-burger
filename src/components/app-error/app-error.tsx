import styles from "./app-error.module.css";

interface IProps {
  message: string;
}

const AppError = ({ message }: IProps) => {
  return (
    <div className='pt-10 pb-10'>
      <p className={`${styles.message} text text_type_main-default`}>
        {message ? message : "Произошла ошибка"}
      </p>
    </div>
  );
};

export default AppError;
