/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "./burger-ingredients-list/burger-ingredients-list";
import Tabs from "../tabs/tabs";
import { IIngredientItems } from "../../../store/ingredients/slice";

interface IProps {
  ingredientsItems: Record<string, IIngredientItems[]>;
}

const BurgerIngredients = ({ ingredientsItems }: IProps) => {
  const [currentTab, setCurrentTab] = useState("buns");
  const refContainer = useRef<HTMLElement | null>(null);
  const isFirsrtRender = useRef(true);

  const setCurrenTabHandler = (tab: string) => {
    setCurrentTab(tab);
    const target = document.getElementById(tab);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ingredientsList = document.querySelectorAll(".ingredients-list");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (!isFirsrtRender.current) {
              setCurrentTab(entry.target.id);
            }
          }
        });
      },
      {
        root: refContainer.current,
        rootMargin: "0px 0px -80% 0px",
      }
    );

    ingredientsList.forEach((item) => {
      observer.observe(item);
    });

    isFirsrtRender.current = false;
  }, []);

  return (
    <section>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <div className={`${styles["tab-group"]} mb-10`}>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrenTabHandler} />
      </div>
      <section ref={refContainer} className={`${styles.container}`}>
        <BurgerIngredientsList
          key={"buns"}
          id={"buns"}
          title='Булки'
          items={ingredientsItems.bun}
        />
        <BurgerIngredientsList
          key={"sauces"}
          id={"sauces"}
          title='Соусы'
          items={ingredientsItems.sauce}
        />
        <BurgerIngredientsList
          key={"main"}
          id={"main"}
          title='Начинки'
          items={ingredientsItems.main}
        />
      </section>
    </section>
  );
};

export default BurgerIngredients;
