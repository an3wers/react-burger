import { memo } from "react";
import IngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import styles from "./burger-ingredients-list.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { IIngredientItems } from "../../../../store/ingredients/slice";

interface IProps {
  title: string
  items: IIngredientItems[]
  id: string
}

const BurgerIngredientsList = memo(({ title, items, id }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowDetail = (item: {id: string, type: string}) => {
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

export default BurgerIngredientsList;
