// import BurgerConstructorItem from './burger-constructor-item/burger-constructor-item';
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorTotal from "./burger-constructor-total/burger-constructor-total";
import PropTypes from "prop-types";
import { itemsPropTypes } from "../../../utlils/types/ingredients.type";
import { useSelector } from "react-redux";
import {
  selectIngredientsConstructorBun,
  selectIngredientsConstructorItems,
} from "../../../store/constructor/selectors";
import BurgerConstructorEmpty from "./burger-constructor-empty/burger-constructor-empty";

const BurgerConstructor = () => {
  // const { staticItems, dragableItems } = constructorItems;

  const selectBun = useSelector(selectIngredientsConstructorBun);
  const selectItems = useSelector(selectIngredientsConstructorItems);

  return (
    <section className={`${styles.container} mt-15`}>
      {selectBun === null && selectItems.length === 0 && (
        <BurgerConstructorEmpty />
      )}

      {selectBun !== null && (
        <div className={`${styles.item} pl-8 pr-6`}>
          <ConstructorElement
            key={selectBun.uuid}
            type='top'
            isLocked={true}
            text={selectBun.name}
            price={selectBun.price}
            thumbnail={selectBun.image}
          />
        </div>
      )}
      {selectItems.length > 0 && (
        <div className={styles["items-dragable"]}>
          {selectItems.map((item) => (
            <div key={item.uuid} className={`${styles.item} pl-8 pr-3`}>
              <span className={styles.item__icon}>
                <DragIcon type='primary' />
              </span>
              <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
      )}
      {selectBun !== null && (
        <div className={`${styles.item} pl-8 pr-6`}>
          <ConstructorElement
            key={selectBun.uuid}
            type='bottom'
            isLocked={true}
            text={selectBun.name}
            price={selectBun.price}
            thumbnail={selectBun.image}
          />
        </div>
      )}

      {(selectBun !== null || selectItems.length > 0) && (
        <BurgerConstructorTotal />
      )}
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   constructorItems: PropTypes.shape({
//     staticItems: PropTypes.arrayOf(itemsPropTypes),
//     dragableItems: PropTypes.arrayOf(itemsPropTypes),
//   }),
// };

export default BurgerConstructor;
