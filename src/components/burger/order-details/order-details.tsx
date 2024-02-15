import styles from "./order-details.module.css";
import done from "../../../images/done.png";
import { selectCurrentOrderState } from "../../../store/order/selectors";
import AppError from "../../app-error/app-error";
import AppLoading from "../../app-loading/app-loading";
import { useAppSelector } from "../../../store/hooks";

const OrderDetails = () => {
  const { orderDetails, isLoading, error } = useAppSelector(
    selectCurrentOrderState
  );

  return (
    <>
      {!isLoading && error && <AppError message={error} />}
      {isLoading && (
        <div>
          <p
            style={{ textAlign: "center" }}
            className='text text_type_main-default pb-6'
          >
            Оформляем заказ...
          </p>
          <AppLoading />
        </div>
      )}
      {!isLoading && !error && (
        <section className={`${styles.container} mb-15`}>
          <div className={"text text_type_digits-large mb-8"}>
            {orderDetails && orderDetails.number}
          </div>
          <p className={"text text_type_main-medium"}>идентификатор заказа</p>
          <div className={"mt-15 mb-15"}>
            <img src={done} alt='Order is done' />
          </div>
          <p className={"text text_type_main-default mb-2"}>
            Ваш заказ начали готовить
          </p>
          <p className={"text text_type_main-default text_color_inactive"}>
            Дождитесь готовности на орбитальной станции
          </p>
        </section>
      )}
    </>
  );
};

export default OrderDetails;
