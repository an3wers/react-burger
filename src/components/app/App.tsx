import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import NotFoundPage from "../../pages/not-found/not-found";
import ProfilePage from "../../pages/profile/profile";
import RegisterPage from "../../pages/register/register";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import AppHeader from "../app-header/app-header";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import AppModal from "../modal/app-modal";
import IngredientDetails from "../burger/ingredient-details/ingredient-details";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../store/ingredients/api";
import { useUser } from "../../hooks/useUser";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import ProfileLayout from "../profile-layout/profile-layout";
import ProfileOrdersPage from "../../pages/profile-orders/profile-orders";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { checkUserAuth } = useUser();

  const background = location.state && location.state.background;

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchIngredients());
    checkUserAuth();
  }, []);

  const handleCloseDetail = () => {
    navigate("/");
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path="/profile"
          element={<OnlyAuth component={<ProfileLayout />} />}
        >
          <Route index element={<OnlyAuth component={<ProfilePage />} />} />
          <Route path="orders" element={<OnlyAuth component={<ProfileOrdersPage />} />} />
        </Route>
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <AppModal
                onClose={handleCloseDetail}
                title={"Детали ингредиента"}
              >
                <IngredientDetails />
              </AppModal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
