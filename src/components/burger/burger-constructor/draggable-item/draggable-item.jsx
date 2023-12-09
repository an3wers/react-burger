import { useDispatch } from "react-redux";
import styles from "./draggable-item.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeItem, updateSortItems } from "../../../../store/constructor/slice";
import { updateItemQty } from "../../../../store/ingredients/slice";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggbleItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const removeHandler = () => {
    dispatch(removeItem(item.uuid));
    dispatch(updateItemQty({ id: item.id, type: item.type, act: "remove" }));
  };

  const [, drop] = useDrop({
    accept: "internalIngredients",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      
      const dragId = item.index;
      const hoverId = index;

      if (dragId === hoverId) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragId < hoverId && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragId > hoverId && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(updateSortItems({ dragId, hoverId }));

      item.index = hoverId;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "internalIngredients",
    item: () => {
      return { id: item.uuid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  
  drag(drop(ref));

  return (
    <div ref={ref} className={`${styles.item} pl-8 pr-3`} style={{opacity}}>
      <span className={styles.item__icon}>
        <DragIcon type="primary" />
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
