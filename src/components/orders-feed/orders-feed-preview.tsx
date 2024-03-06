import { useMemo } from "react";
import styles from "./orders-feed-preview.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";

interface IOrderProp {
  ingredients: {
    id: string;
    uuid: string;
    imgPath: string;
    price: number;
  }[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface IProps {
  order: IOrderProp;
  isProfile: boolean;
}

const PREVIEW_LIMIT = 5;

const statuses: Record<string, string> = {
  created: "Создан",
  pending: "Готовится",
  done: "Выполнен",
};

const OrdersFeedPreview = ({ isProfile, order }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTotal = useMemo(() => {
    return order.ingredients.reduce((total, { price }) => total + price, 0);
  }, [order]);

  function showDetails(orderNumber: number) {
    navigate(`/${isProfile ? "profile/orders" : "feed"}/${orderNumber}`, {
      state: { background: location, number: orderNumber },
    });
  }

  return (
    <div
      onClick={() => showDetails(order.number)}
      className={styles["order-container"]}
    >
      <div className={styles["order-topline"]}>
        <p className='text text_type_digits-default'>#{order.number}</p>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
      </div>
      <header>
        <h3 className='text text_type_main-medium'>{order.name}</h3>
        {isProfile && (
          <p
            className={`${
              order.status === "done" ? styles["order-status_completed"] : ""
            } text text_type_main-default mt-2`}
          >
            {statuses[order.status] || order.status}
          </p>
        )}
      </header>
      <div className={styles["order-footer"]}>
        <div className={styles["order-ingridients"]}>
          {order.ingredients.length > 0 &&
            order.ingredients
              .filter((el, idx) => !!el.id && idx <= PREVIEW_LIMIT)
              .map(({ id, imgPath, uuid }, idx) => {
                return (
                  <div
                    key={uuid}
                    className={styles["order-ingridients__preview"]}
                    style={{ zIndex: order.ingredients.length - idx }}
                  >
                    <img src={imgPath} key={id} alt={id} />
                    {idx === PREVIEW_LIMIT && (
                      <span
                        className={`${styles["order-ingridients__counter"]} text text_type_main-small`}
                      >
                        +{order.ingredients.length - PREVIEW_LIMIT}
                      </span>
                    )}
                  </div>
                );
              })}
        </div>
        <div
          className={`${styles["order-ingridients__total"]} text text_type_digits-default`}
        >
          {getTotal}
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrdersFeedPreview;
