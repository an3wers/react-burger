// import BurgerConstructorItem from './burger-constructor-item/burger-constructor-item';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = ({ constructorItems }) => {
  const { staticItems, dragableItems } = constructorItems;

  return (
    <section className={`${styles.container} mt-15`}>
      <div className={`${styles.item} pl-8`}>
        <ConstructorElement
          key={staticItems[0]._id}
          type="top"
          isLocked={true}
          text={staticItems[0].name}
          price={staticItems[0].price}
          thumbnail={staticItems[0].image}
        />
      </div>

      <div className={styles["items-dragable"]}>
        {dragableItems.map((item) => (
          <div key={item._id} className={`${styles.item} pl-8`}>
            <span className={styles.item__icon}>
              <DragIcon type="primary" />
            </span>
            <ConstructorElement
              isLocked={false}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        ))}
      </div>
      <div className={`${styles.item} pl-8`}>
        <ConstructorElement
          key={staticItems[0]._id + "_"}
          type="bottom"
          isLocked={true}
          text={staticItems[0].name}
          price={staticItems[0].price}
          thumbnail={staticItems[0].image}
        />
      </div>
    </section>
  );
};

export default BurgerConstructor;
