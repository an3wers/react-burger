import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsList from "./burger-ingredients-list/burger-ingredients-list";
import AppModal from "../../modal/app-modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ ingredientsItems }) => {
  const [currentTab, setCurrentTab] = useState("buns");
  const [isModalDetail, setIsModalDetail] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleShowDetail = useCallback((item) => {
    setCurrentItem(getFullItem(item));
    setIsModalDetail(true);
  }, []);

  const handleCloseDetail = () => {
    setCurrentItem(null);
    setIsModalDetail(false);
  };

  const getFullItem = (item) => {
    return ingredientsItems[item.type].find((el) => el._id === item.id);
  };

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
          onShowDetail={handleShowDetail}
          key={"buns"}
          title="Булки"
          items={ingredientsItems.bun}
        />
        <BurgerIngredientsList
          onShowDetail={handleShowDetail}
          key={"sauces"}
          title="Соусы"
          items={ingredientsItems.sauce}
        />
        <BurgerIngredientsList
          onShowDetail={handleShowDetail}
          key={"main"}
          title="Начинки"
          items={ingredientsItems.main}
        />
      </section>
      {isModalDetail && currentItem && (
        <AppModal onClose={handleCloseDetail} title={'Детали ингредиента'}>
          <IngredientDetails ingredient={currentItem} />
        </AppModal>
      )}
    </section>
  );
};

export default BurgerIngredients;
