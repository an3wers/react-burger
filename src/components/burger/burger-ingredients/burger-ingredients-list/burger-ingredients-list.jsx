import { memo } from "react";
import IngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
import { itemsPropTypes } from "../../../../utlils/types/ingredients.type";

const BurgerIngredientsList = memo(({ title, items, onShowDetail }) => {
  return (
    <div className="mb-8">
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <div className={`${styles["items-container"]} pr-4 pl-4`}>
        {items.map((item, idx) => (
          <IngredientsItem
            key={item._id}
            id={item._id}
            onShowDetail={onShowDetail}
            name={item.name}
            price={item.price}
            image={item.image}
            type={item.type}
            // Для верстки
            hasCounter={idx === 0}
          />
        ))}
      </div>
    </div>
  );
});

BurgerIngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemsPropTypes),
  onShowDetail: PropTypes.func.isRequired,
};

export default BurgerIngredientsList;
