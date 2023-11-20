import styles from "./burger-ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientsItem = ({ name, price, image, hasCounter = false }) => {
  return (
    <div className={`${styles.item} mb-8`}>
      <div className={`${styles.item__img} pr-4 pl-4`}>
        <img src={image} alt={name} />
      </div>
      <p className={`${styles.item__price} text text_type_digits-default`}>
        <span>{price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.item__name} text text_type_main-default`}>
        {name}
      </p>
      {hasCounter && <Counter count={1} size="default" extraClass="m-1" />}
    </div>
  );
};

export default IngredientsItem;
