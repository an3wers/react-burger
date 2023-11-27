import { itemsPropTypes } from "../../../utlils/types/ingredients.type";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ ingredient }) => {
  const { name, image_large, calories, proteins, fat, carbohydrates } =
    ingredient;

  return (
    <section className={`${styles.container} mb-5`}>
      <div className={`${styles.img} mb-4`}>
        <img src={image_large} alt={name} />
      </div>
      <div className={`${styles.name} text text_type_main-medium mb-8`}>
        {name}
      </div>
      <div className={styles.values}>
        <div className={styles.values__item}>
          <span className="text text_type_main-default">Калории,ккал</span>
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
          <span className="text text_type_digits-default">{carbohydrates}</span>
        </div>
      </div>
    </section>
  );
};

IngredientDetails.propTypes = {
  ingredient: itemsPropTypes,
};

export default IngredientDetails;
