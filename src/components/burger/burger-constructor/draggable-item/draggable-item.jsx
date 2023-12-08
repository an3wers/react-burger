import { useDispatch } from "react-redux";
import styles from "./draggable-item.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeItem } from "../../../../store/constructor/slice";
import { updateItemQty } from "../../../../store/ingredients/slice";

const DraggbleItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeItem(item.uuid));
    dispatch(updateItemQty({ id: item.id, type: item.type, act: "remove" }));
  };

  return (
    <div key={item.uuid} className={`${styles.item} pl-8 pr-3`}>
      <span className={styles.item__icon}>
        <DragIcon type='primary' />
      </span>
      <ConstructorElement
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={removeHandler}
      />
    </div>
  );
};

export default DraggbleItem;
