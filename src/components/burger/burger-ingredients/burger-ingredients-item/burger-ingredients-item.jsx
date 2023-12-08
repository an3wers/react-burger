import styles from "./burger-ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const IngredientsItem = ({
  id,
  name,
  type,
  price,
  image,
  qty,
  onShowDetail,
}) => {
  const [{ isDragging }, dragRef, dragPreview] = useDrag({
    type: "ingredient",
    item: { id, type, name, price, image },
    
    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
  });

  return (
    <div
      onClick={() => onShowDetail({ id, type })}
      className={`${styles.item} mb-8`}
      ref={dragRef}
    >
      <div className={`${styles.item__img} pr-4 pl-4`}>
        <img src={image} alt={name} />
      </div>
      <p className={`${styles.item__price} text text_type_digits-default`}>
        <span>{price}</span>
        <CurrencyIcon type='primary' />
      </p>
      <p className={`${styles.item__name} text text_type_main-default`}>
        {name}
      </p>
      {qty > 0 && <Counter count={qty} size='default' extraClass='m-1' />}
    </div>
  );
};

IngredientsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onShowDetail: PropTypes.func.isRequired,
};

export default IngredientsItem;
