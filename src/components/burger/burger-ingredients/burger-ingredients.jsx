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
          value="main"
          active={currentTab === "main"}
          onClick={setCurrentTab}
        >
          Начинки
        </Tab>
      </div>
      <section className={`${styles.container}`}>
        <BurgerIngredientsList
          key={"buns"}
          title="Булки"
          items={ingredientsItems.bun}
        />
        <BurgerIngredientsList
          key={"sauces"}
          title="Соусы"
          items={ingredientsItems.sauce}
        />
        <BurgerIngredientsList
          key={"main"}
          title="Начинки"
          items={ingredientsItems.main}
        />
      </section>
    </section>
  );
};

export default BurgerIngredients;
