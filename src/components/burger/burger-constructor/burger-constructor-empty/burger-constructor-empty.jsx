import styles from "./burger-constructor-empty.module.css";

const BurgerConstructorEmpty = () => {
  return (
    <section className={styles.container}>
      <p className='text text_type_main-default text_color_inactive'>
        Перетащите ингредиенты
      </p>
    </section>
  );
};

export default BurgerConstructorEmpty;
