import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger/burger-constructor/burger-constructor";
import BurgerIngredients from "../burger/burger-ingredients/burger-ingredients";
import BurgerLayout from "../burger/burger-layout/burger-layout";
import {
  mappingForIngredients,
} from "../../utlils/mappers/mappers";
import { useEffect, useMemo } from "react";
import AppError from "../app-error/app-error";
import AppLoading from "../app-loading/app-loading";
import { useDispatch, useSelector } from "react-redux";
import { selectIngredientsState } from "../../store/ingredients/selectors";
import { fetchIngredients } from "../../store/ingredients/thunks";

function App() {
  const { items, isLoading, error } = useSelector(selectIngredientsState);
  const dispatch = useDispatch();

  const mappedItems = useMemo(() => mappingForIngredients(items), [items]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchIngredients());
  }, []);

  return (
    <>
      <AppHeader />
      <div className={`${styles.container} pt-10 pb-10`}>
        {!isLoading && error && <AppError message={error} />}
        {isLoading && <AppLoading />}
        {!isLoading && !error && items.length > 0 && (
          <BurgerLayout>
            <>
              <BurgerIngredients ingredientsItems={mappedItems} />
              {/* <BurgerConstructor
                constructorItems={mappingForConstructor(ingredients)}
              /> */}
              {/* <BurgerConstructor
                constructorItems={{}}
              /> */}
            </>
          </BurgerLayout>
        )}
      </div>
    </>
  );
}

export default App;
