import { IOrderFeed } from "../../store/types";
import styles from "./orders-feed-preview.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

interface IProps {
  order: IOrderFeed;
  isProfile: boolean;
  ingridientsPreview: { id: string; imgPath: string }[];
}
const OrdersFeedPreview = ({
  isProfile,
  order,
  ingridientsPreview,
}: IProps) => {
  return (
    <div className={styles["order-container"]}>
      <div className={styles["order-header"]}>
        <p className='text text_type_digits-default'>#{order.number}</p>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
      </div>
      <p className='text text_type_main-medium'>{order.name}</p>
      <div className={styles["order-footer"]}>
        <div className={styles["order-ingridients"]}>
          {ingridientsPreview.length > 0 &&
            ingridientsPreview
              .filter((_, idx) => idx < 6)
              .map(({ id, imgPath }, idx) => {
                return (
                  <div
                    className={styles["order-ingridients-preview"]}
                    style={{ zIndex: ingridientsPreview.length - idx }}
                  >
                    <img src={imgPath} key={id} alt={id} />
                    {idx === 5 && (
                      <span
                        className={`${styles["order-ingridients-counter"]} text text_type_main-small`}
                      >
                        +{ingridientsPreview.length - 5}
                      </span>
                    )}
                  </div>
                );
              })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OrdersFeedPreview;
