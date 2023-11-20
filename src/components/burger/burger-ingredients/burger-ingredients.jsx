import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "./burger-ingredients-list/burger-ingredients-list";

const BurgerIngredients = ({ ingredientsItems }) => {
  const [currentTab, setCurrentTab] = useState("buns");

  return (
    <section>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={`${styles["tab-group"]} mb-10`}>
        <Tab
          value="buns"
          active={currentTab === "buns"}
          onClick={setCurrentTab}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={setCurrentTab}
        >
          Соусы
        </Tab>
        <Tab
          value="fillings"
          active={currentTab === "fillings"}
          onClick={setCurrentTab}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container}`}>
        <BurgerIngredientsList title="Булки" items={ingredientsItems.bun} />
        <BurgerIngredientsList title="Соусы" items={ingredientsItems.sauce} />
        <BurgerIngredientsList title="Начинки" items={ingredientsItems.main} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
