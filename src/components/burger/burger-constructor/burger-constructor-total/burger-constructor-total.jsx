import { useState } from "react";
import styles from "./burger-constructor-total.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import AppModal from "../../../modal/app-modal";
import OrderDetails from "../../order-details/order-details";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../../store/order/api";
import { resetOrder, setError } from "../../../../store/order/slice";
import { resetConstructor } from "../../../../store/constructor/slice";
import { resetItemsQty } from "../../../../store/ingredients/slice";
import PropTypes from "prop-types";
import { useUser } from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const BurgerConstructorTotal = ({ total, ingredientsIds }) => {
  const [isModalOrderDetail, setIsModalOrderDetail] = useState(false);

  const dispatch = useDispatch();
  const { user } = useUser();
  const navigate = useNavigate();

  const modalToggle = () => setIsModalOrderDetail(!isModalOrderDetail);

  const createOrderHandler = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (!ingredientsIds.length) {
        dispatch(setError("Пожалуйста, выберите булочки для бургера."));
      } else {
        const data = {
          ingredients: ingredientsIds,
        };
        dispatch(createOrder(data));
      }
      modalToggle();
    }
  };

  const closeOrderDetailHandler = () => {
    modalToggle();
    if (ingredientsIds.length) {
      dispatch(resetOrder());
      dispatch(resetConstructor());
      dispatch(resetItemsQty());
    }
  };

  return (
    <>
      <div className={`${styles.container}  mt-8 pr-8`}>
        <span className="text text_type_digits-medium mr-10">{total}</span>
        <Button
          onClick={createOrderHandler}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {isModalOrderDetail && (
        <AppModal onClose={closeOrderDetailHandler}>
          <OrderDetails />
        </AppModal>
      )}
    </>
  );
};

BurgerConstructorTotal.propTypes = {
  total: PropTypes.number.isRequired,
  ingredientsIds: PropTypes.arrayOf(PropTypes.string),
};

export default BurgerConstructorTotal;
