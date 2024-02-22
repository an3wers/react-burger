import { useAppSelector } from "../../store/hooks";
import { selectIngredientsState } from "../../store/ingredients/selectors";
import styles from "./orders-feed-layout.module.css";
import OrdersFeedPreview from "./orders-feed-preview";

interface IProps {
  isProfile?: boolean;
}

const OrdersFeedLayout = ({ isProfile = false }: IProps) => {
  const orders = useAppSelector((state) => {
    return state.ordersFeed.orders;
  });

  const { itemsMapById: ingridients } = useAppSelector(selectIngredientsState);

  const getIngridientsPreview = (ids: string[]) => {
    return ids.map((id) => ({
      id: ingridients[id]._id,
      imgPath: ingridients[id].image_mobile,
    }));
  };

  return (
    <section className={styles.container}>
      {orders.length > 0 &&
        orders.map((order) => (
          <OrdersFeedPreview
            isProfile={isProfile}
            key={order._id}
            order={order}
            ingridientsPreview={getIngridientsPreview(order.ingredients)}
          />
        ))}
    </section>
  );
};

export default OrdersFeedLayout;
