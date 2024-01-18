import styles from "./app-loading.module.css";

const AppLoading = () => {
  return (
    <div className="pt-10 pb-10">
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default AppLoading;
