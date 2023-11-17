import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerLayout>
          <BurgerConstructor />
          <BurgerIngredients />
        </BurgerLayout>
      </div>
    </>
  );
}

export default App;
