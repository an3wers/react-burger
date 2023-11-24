import styles from "./order-details.module.css";
import done from "../../../images/done.png";

const OrderDetails = () => {
  return (
    <section className={`${styles.container} mb-15`}>
      <div className={"text text_type_digits-large mb-8"}>034536</div>
      <p className={"text text_type_main-medium"}>идентификатор заказа</p>
      <div className={"mt-15 mb-15"}>
        <img src={done} alt="Order is done" />
      </div>
      <p className={"text text_type_main-default mb-2"}>
        Ваш заказ начали готовить
      </p>
      <p className={"text text_type_main-default text_color_inactive"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};

export default OrderDetails;
