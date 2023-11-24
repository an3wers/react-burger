import styles from "./burger-ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const IngredientsItem = ({
  id,
  name,
  type,
  price,
  image,
  hasCounter = false,
  onShowDetail,
}) => {
  return (
    <div
      onClick={() => onShowDetail({ id, type })}
      className={`${styles.item} mb-8`}
    >
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

IngredientsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hasCounter: PropTypes.bool,
  onShowDetail: PropTypes.func.isRequired,
};

export default IngredientsItem;
