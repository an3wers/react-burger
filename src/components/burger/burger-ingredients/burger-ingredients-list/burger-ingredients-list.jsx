import { memo, useState, useCallback } from "react";
import IngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
import { itemsPropTypes } from "../../../../utlils/types/ingredients.type";
import { useDispatch } from "react-redux";
import {
  setIngredient,
  clearIngridient,
} from "../../../../store/ingredient-details/slice";
import AppModal from "../../../modal/app-modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

const BurgerIngredientsList = memo(({ title, items, id }) => {
  const [isModalDetail, setIsModalDetail] = useState(false);

  const dispatch = useDispatch();

  const handleShowDetail = useCallback((item) => {
    dispatch(setIngredient(getFullItem(item)));
    setIsModalDetail(true);
  }, [dispatch]);

  const handleCloseDetail = () => {
    dispatch(clearIngridient());
    setIsModalDetail(false);
  };

  const getFullItem = (item) => {
    return items.find((el) => el._id === item.id);
  };

  return (
    <>
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
      {isModalDetail && (
        <AppModal onClose={handleCloseDetail} title={"Детали ингредиента"}>
          <IngredientDetails />
        </AppModal>
      )}
    </>
  );
});

BurgerIngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemsPropTypes),
  id: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
