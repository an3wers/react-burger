import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerLayout>
        <BurgerConstructor />
        <BurgerIngredients />
      </BurgerLayout>
    </div>
  );
}

export default App;
