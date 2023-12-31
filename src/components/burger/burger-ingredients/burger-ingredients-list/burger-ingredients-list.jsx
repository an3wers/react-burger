import { memo } from "react";
import IngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
import { itemsPropTypes } from "../../../../utils/types/ingredients.type";
import { useNavigate, useLocation } from "react-router-dom";

const BurgerIngredientsList = memo(({ title, items, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowDetail = (item) => {
    navigate(`/ingredients/${item.id}`, { state: { background: location } });
  };

  return (
    <div id={id} className="ingredients-list mb-8">
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <div className={`${styles["items-container"]} pr-4 pl-4`}>
        {items.length > 0 &&
          items.map((item) => (
            <IngredientsItem
              key={item._id}
              id={item._id}
              onShowDetail={handleShowDetail}
              name={item.name}
              price={item.price}
              image={item.image}
              type={item.type}
              qty={item.qty}
            />
          ))}
      </div>
    </div>
  );
});

BurgerIngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemsPropTypes),
  id: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
