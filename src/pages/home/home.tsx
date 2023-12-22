
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIngredientsState } from "../../store/ingredients/selectors";
import { mappingForIngredients } from "../../utlils/mappers/mappers";
import AppError from "../../components/app-error/app-error";
import AppLoading from "../../components/app-loading/app-loading";
import BurgerLayout from "../../components/burger/burger-layout/burger-layout";
import BurgerIngredients from "../../components/burger/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger/burger-constructor/burger-constructor";
import { fetchIngredients } from "../../store/ingredients/api";

function HomePage() {

  const { items, isLoading, error } = useSelector(selectIngredientsState);
  const dispatch = useDispatch();

  const mappedItems = useMemo(() => mappingForIngredients(items), [items]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className={'container pt-10 pb-10'}>
        {!isLoading && error && <AppError message={error} />}
        {isLoading && <AppLoading />}
        {!isLoading && !error && items.length > 0 && (
          <DndProvider backend={HTML5Backend}>
            <BurgerLayout>
              <>
                <BurgerIngredients ingredientsItems={mappedItems} />
                <BurgerConstructor />
              </>
            </BurgerLayout>
          </DndProvider>
        )}
      </div>
  );
}

export default HomePage;
