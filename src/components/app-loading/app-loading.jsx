import styles from "./app-loading.module.css";

const AppLoading = () => {
  return (
    <div className="pt-10 pb-10">
      <p className={`${styles.text} text text_type_main-default`}>
        Загрузка...
      </p>
    </div>
  );
};

export default AppLoading;
