import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";
import data from "../../utlils/data.json";
import { mappingForIngredients } from "../../utlils/mappers/mappers";

// console.log('@Data', data)
// console.log('@Mapped', mappingForIngredients(data))

const ingredientsItems = mappingForIngredients(data);

function App() {
  return (
    <>
      <AppHeader />
      <div className={`${styles.container} pt-10 pb-10`}>
        <BurgerLayout>
          <BurgerIngredients ingredientsItems={ingredientsItems} />
          <BurgerConstructor constructorItems={data} />
        </BurgerLayout>
      </div>
    </>
  );
}

export default App;
