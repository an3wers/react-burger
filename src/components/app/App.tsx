import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";
import data from "../../utlils/data.json";
import { mappingForConstructor, mappingForIngredients } from "../../utlils/mappers/mappers";

const ingredientsItems = mappingForIngredients(data);
const constructorItems = mappingForConstructor(data)

function App() {
  return (
    <>
      <AppHeader />
      <div className={`${styles.container} pt-10 pb-10`}>
        <BurgerLayout>
          <BurgerIngredients ingredientsItems={ingredientsItems} />
          <BurgerConstructor constructorItems={constructorItems} />
        </BurgerLayout>
      </div>
    </>
  );
}

export default App;
