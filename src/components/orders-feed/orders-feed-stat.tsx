import { useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import styles from "./orders-feed-stat.module.css";

const ORDERS_LIMIT = 20;
const ORDERS_COLUMN_LIMIT = 10;

const OrderFeedStat = () => {
  const { total, totalToday, orders } = useAppSelector((state) => {
    return state.ordersFeed;
  });

  const isDoneOrders = useMemo(() => {
    return orders.filter(
      (order, idx) => order.status === "done" && idx < ORDERS_LIMIT
    );
  }, [orders]);
  const isProcessingOrders = useMemo(() => {
    return orders.filter(
      (order, idx) => order.status !== "done" && idx < ORDERS_LIMIT
    );
  }, [orders]);

  return (
    <section className={styles.container}>
      <div className={styles.orders}>
        <div className={styles.orders__completed}>
          <h4 className='text text_type_main-medium mb-6'>Готовы:</h4>
          {isDoneOrders.length > 0 && (
            <ul
              className={`${styles["orders-list"]} ${styles["orders_completed"]}`}
              style={{
                columnCount:
                  isDoneOrders.length > ORDERS_COLUMN_LIMIT ? "2" : "1",
              }}
            >
              {isDoneOrders.map((order) => (
                <li className='text text_type_digits-default' key={order._id}>
                  {order.number}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.orders__processing}>
          <h4 className='text text_type_main-medium mb-6'>В работе:</h4>
          {isProcessingOrders.length > 0 && (
            <ul
              className={styles["orders-list"]}
              style={{
                columnCount:
                  isProcessingOrders.length > ORDERS_COLUMN_LIMIT ? "2" : "1",
              }}
            >
              {isProcessingOrders.map((order) => (
                <li className='text text_type_digits-default' key={order._id}>
                  {order.number}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.total}>
        <h4 className='text text_type_main-medium'>Выполнено за все время:</h4>
        <p className='text text_type_digits-large'>{total}</p>
      </div>
      <div className={styles["today-total"]}>
        <h4 className='text text_type_main-medium'>Выполнено за сегодня:</h4>
        <p className='text text_type_digits-large'>{totalToday}</p>
      </div>
    </section>
  );
};

export default OrderFeedStat;
