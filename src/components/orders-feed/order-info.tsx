import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useMemo } from "react";
import { selectIngredientsState } from "../../store/ingredients/selectors";
import { getOrderByNumber } from "../../store/order/api";
import AppLoading from "../app-loading/app-loading";
import { IIngredientItems } from "../../store/ingredients/slice";
import { IOrderFeed } from "../../store/types";
import styles from "./order-info.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

const statuses: Record<string, string> = {
  created: "Создан",
  pending: "Готовится",
  done: "Выполнен",
};

const OrderInfo = () => {
  const { number } = useParams();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const order = useAppSelector((state) => {
    let order = state.ordersFeed.orders.find(
      (item) => item.number === +number!
    );

    if (order) {
      return order;
    }

    order = state.ordersProfile.orders.find((item) => item.number === +number!);

    if (order) {
      return order;
    }

    if (state.order.currentOrder) {
      const { __v, ...currOrder } = state.order.currentOrder!;
      return currOrder as IOrderFeed;
    }

    return null;
  });

  const { itemsMapById } = useAppSelector(selectIngredientsState);

  useEffect(() => {
    if (!order) {
      dispatch(getOrderByNumber(+number!));
    }
  }, []);

  const currentIngridients = useMemo(() => {
    if (!order) {
      return [];
    }

    const tmpOrders: Record<string, any> = {};
    order.ingredients.forEach((item) => {
      if (item) {
        if (item in tmpOrders) {
          tmpOrders[item] = {
            ...itemsMapById[item],
            qty: tmpOrders[item].qty + 1,
          };
        } else {
          tmpOrders[item] = { ...itemsMapById[item], qty: 1 };
        }
      }
    });

    return Object.values(tmpOrders) as IIngredientItems[];
  }, [order, itemsMapById]);

  const getTotal = useMemo(() => {
    if (!currentIngridients.length) {
      return 0;
    }

    return currentIngridients.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  }, [currentIngridients]);

  if (!order) {
    return <AppLoading />;
  } else {
    return (
      <section
        className={`${styles.container} ${
          !location.state ? "mt-15" : ""
        } pl-5 pr-5`}
      >
        <header className='mb-15'>
          <div className='text text_type_digits-default mb-8'>
            #{order.number}
          </div>
          <h1 className='text text_type_main-medium mb-2'>{order.name}</h1>
          <p
            className={`${
              order.status === "done" ? styles["order-status_completed"] : ""
            } text text_type_main-default`}
          >
            {statuses[order.status] || order.status}
          </p>
        </header>

        <div className='mb-10'>
          <h2 className='text text_type_main-medium mb-6'>Состав:</h2>

          {currentIngridients.length > 0 && (
            <section className={styles["order-list"]}>
              {currentIngridients.map((item) => (
                <div key={item._id} className={styles["order-item"]}>
                  <div className={styles["order-item__preview"]}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div
                    className={`${styles["order-item__name"]} text text_type_main-default`}
                  >
                    {item.name}
                  </div>
                  <div className={styles["order-item__price"]}>
                    <span className='text text_type_digits-default'>
                      {item.qty} x {item.price}
                    </span>
                    <CurrencyIcon type='primary' />
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
        <footer className={styles["order-footer"]}>
          <div
            className={`${styles["order-footer__date"]} text text_type_main-small text_color_inactive`}
          >
            <FormattedDate date={new Date(order.createdAt)} />
          </div>
          <div className={`${styles["order-footer__total"]}`}>
            <span className='text text_type_digits-default'>{getTotal}</span>
            <CurrencyIcon type='primary' />
          </div>
        </footer>
      </section>
    );
  }
};

export default OrderInfo;
