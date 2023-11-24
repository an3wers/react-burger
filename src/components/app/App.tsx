import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";
import {
  mappingForConstructor,
  mappingForIngredients,
} from "../../utlils/mappers/mappers";
import { useEffect, useState } from "react";
import { getIngredients } from "../../api/ingredients.api";
import AppError from "../app-error/app-error";
import AppLoading from "../app-loading/app-loading";

function App() {
  const [ingredients, setIngredients] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getIngredients()
      .then(({ data }) => {
        setError("");
        setIngredients(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <div className={`${styles.container} pt-10 pb-10`}>
        {isLoaded && error && <AppError message={error} />}
        {!isLoaded && <AppLoading />}
        {isLoaded && !error && (
          <BurgerLayout>
            <>
              <BurgerIngredients
                ingredientsItems={mappingForIngredients(ingredients)}
              />
              <BurgerConstructor
                constructorItems={mappingForConstructor(ingredients)}
              />
            </>
          </BurgerLayout>
        )}
      </div>
    </>
  );
}

export default App;
