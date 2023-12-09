import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorTotal from "./burger-constructor-total/burger-constructor-total";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIngredientsConstructorBun,
  selectIngredientsConstructorItems,
} from "../../../store/constructor/selectors";
import BurgerConstructorEmpty from "./burger-constructor-empty/burger-constructor-empty";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { setBun, setItems } from "../../../store/constructor/slice";
import { updateItemQty } from "../../../store/ingredients/slice";
import DraggbleItem from "./draggable-item/draggable-item";

const BurgerConstructor = () => {
  const selectBun = useSelector(selectIngredientsConstructorBun);
  const selectItems = useSelector(selectIngredientsConstructorItems);

  const dispatch = useDispatch();

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    drop: (item) => {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver({ shallow: true }),
    }),
  });

  const onDropHandler = (item) => {
    const uuid = uuidv4();

    switch (item.type) {
      case "bun":
        dispatch(setBun({ ...item, uuid }));
        break;
      default:
        dispatch(setItems({ ...item, uuid }));
        break;
    }

    dispatch(updateItemQty({ id: item.id, type: item.type, act: "add" }));
  };

  return (
    <section ref={dropRef} className={`${styles.container} mt-15`}>
      {selectBun === null && selectItems.length === 0 ? (
        <BurgerConstructorEmpty isHover={isHover} />
      ) : (
        <>
          <div className={`${styles['inner-container']} ${isHover && styles['inner-container_hover']} p-1`}>
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

            <div className={styles["items-dragable"]}>
              {selectItems.length > 0 &&
                selectItems.map((item, index) => (
                  <DraggbleItem key={item.uuid} item={item} index={index} />
                ))}
            </div>

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
          </div>
          {(selectBun !== null || selectItems.length > 0) && (
            <BurgerConstructorTotal />
          )}
        </>
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
