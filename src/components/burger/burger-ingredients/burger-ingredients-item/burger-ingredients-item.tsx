import styles from "./burger-ingredients-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

interface IProps {
  id: string
  name: string
  type: string
  price: number
  image: string
  qty: number
  onShowDetail: ({ id, type }: {id: string, type: string}) => void
}

interface IDragObject {
  id: string
  type: string
  name: string
  price: number
  image: string
}

const IngredientsItem = ({
  id,
  name,
  type,
  price,
  image,
  qty,
  onShowDetail,
}: IProps) => {
  const [, dragRef] = useDrag<IDragObject, unknown>({
    type: "ingredient",
    item: { id, type, name, price, image },
  });

  return (
    <div
      onClick={() => onShowDetail({ id, type })}
      className={`${styles.item} mb-8`}
      ref={dragRef}
    >
      <div className={`${styles.item__img} pr-4 pl-4`}>
        <img src={image} alt={name} />
      </div>
      <p className={`${styles.item__price} text text_type_digits-default`}>
        <span>{price}</span>
        <CurrencyIcon type='primary' />
      </p>
      <p className={`${styles.item__name} text text_type_main-default`}>
        {name}
      </p>
      {qty > 0 && <Counter count={qty} size='default' extraClass='m-1' />}
    </div>
  );
};

export default IngredientsItem;
