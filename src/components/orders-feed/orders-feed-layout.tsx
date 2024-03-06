import { useAppSelector } from "../../store/hooks";
import { TIngredientMapById } from "../../store/ingredients/slice";
import { IOrderFeed } from "../../store/types";
import OrdersFeedPreview from "./orders-feed-preview";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  isProfile?: boolean;
}

const ordersMapper = (
  ordersArr: IOrderFeed[],
  ingridientsMap: TIngredientMapById
) => {
  if (!ordersArr.length) {
    return [];
  }

  return ordersArr.map((order) => {
    const ingridientsArrObj = order.ingredients.map((ingredientId) => {
      return {
        id: ingredientId,
        uuid: uuidv4(),
        imgPath: ingredientId ? ingridientsMap[ingredientId]?.image_mobile : "",
        price: ingredientId ? ingridientsMap[ingredientId]?.price : 0,
      };
    });
    return { ...order, ingredients: ingridientsArrObj };
  });
};

const OrdersFeedLayout = ({ isProfile = false }: IProps) => {
  const orders = useAppSelector((state) => {
    return isProfile
      ? ordersMapper(state.ordersProfile.orders, state.ingredients.itemsMapById)
      : ordersMapper(state.ordersFeed.orders, state.ingredients.itemsMapById);
  });

  return (
    <>
      {orders.length > 0 &&
        orders.map((order) => (
          <OrdersFeedPreview
            isProfile={isProfile}
            key={order._id}
            order={order}
          />
        ))}
    </>
  );
};

export default OrdersFeedLayout;
