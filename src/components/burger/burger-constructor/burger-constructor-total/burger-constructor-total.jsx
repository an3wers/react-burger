import { useState } from "react";
import styles from "./burger-constructor-total.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import AppModal from "../../../modal/app-modal";
import OrderDetails from "../../order-details/order-details";
import { useSelector } from "react-redux";
import { selectTotalSum } from "../../../../store/constructor/selectors";


const BurgerConstructorTotal = () => {
  const [isModalOrderDetail, setIsModalOrderDetail] = useState(false);

  const total = useSelector(selectTotalSum)

  const modalToggle = () => setIsModalOrderDetail(!isModalOrderDetail);

  return (
    <>
      <div className={`${styles.container}  mt-8 pr-8`}>
        <span className="text text_type_digits-medium mr-10">{total}</span>
        <Button
          onClick={modalToggle}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOrderDetail && (
        <AppModal onClose={modalToggle}>
          <OrderDetails />
        </AppModal>
      )}
    </>
  );
};

export default BurgerConstructorTotal;
