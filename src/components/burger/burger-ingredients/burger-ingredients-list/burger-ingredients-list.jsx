import { memo } from "react";
import IngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import styles from "./burger-ingredients-list.module.css";

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

export default BurgerIngredientsList;
