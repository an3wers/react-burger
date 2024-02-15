import { useMemo } from "react";
import { selectIngredientsState } from "../../../store/ingredients/selectors";
import styles from "./ingredient-details.module.css";
import { useParams, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const IngredientDetails = () => {
  const { id } = useParams();
  const location = useLocation()
  const { items } = useAppSelector(selectIngredientsState);

  const currentIngredient = useMemo(() => {
    const found = items.find((item) => item._id === id);
    if (!found) {
      return null;
    }
    return found;
  }, [items, id]);

  if (currentIngredient) {
    const { name, image_large, calories, proteins, fat, carbohydrates } =
      currentIngredient;
    return (
      <section className={`${styles.container} mb-5`}>
        {!location.state && <h1 className="text text_type_main-large mt-10">Детали ингредиента</h1>}
        <div className={`${styles.img} mb-4`}>
          <img src={image_large} alt={name} />
        </div>
        <div className={`${styles.name} text text_type_main-medium mb-8`}>
          {name}
        </div>
        <div className={styles.values}>
          <div className={styles.values__item}>
            <span className="text text_type_main-default">Калории, ккал</span>
            <span className="text text_type_digits-default">{calories}</span>
          </div>
          <div className={styles.values__item}>
            <span className="text text_type_main-default">Белки, г</span>
            <span className="text text_type_digits-default">{proteins}</span>
          </div>
          <div className={styles.values__item}>
            <span className="text text_type_main-default">Жиры, г</span>
            <span className="text text_type_digits-default">{fat}</span>
          </div>
          <div className={styles.values__item}>
            <span className="text text_type_main-default">Углеводы, г</span>
            <span className="text text_type_digits-default">
              {carbohydrates}
            </span>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default IngredientDetails;
