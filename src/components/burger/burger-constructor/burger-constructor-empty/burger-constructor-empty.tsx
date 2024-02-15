import styles from "./burger-constructor-empty.module.css";

interface IProps {
  isHover: boolean;
}

const BurgerConstructorEmpty = ({ isHover }: IProps) => {
  return (
    <section
      className={`${styles.container} ${isHover && styles.container_hover}`}
    >
      <p className='text text_type_main-default text_color_inactive'>
        Перетащите ингредиенты
      </p>
    </section>
  );
};

export default BurgerConstructorEmpty;
