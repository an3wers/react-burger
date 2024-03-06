import { useEffect } from "react";
import AppLoading from "../../components/app-loading/app-loading";
import OrdersFeedLayout from "../../components/orders-feed/orders-feed-layout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  connect as ordersProfileConnect,
  disconnect as ordersProfileDisconnect,
} from "../../store/ordersProfile/actions";
import styles from "./profile-orders.module.css";

const token = localStorage.getItem("accessToken") || "";
const WS_URL = `wss://norma.nomoreparties.space/orders?token=${token.replace(
  "Bearer ",
  ""
)}`;

function ProfileOrdersPage() {
  const dispatch = useAppDispatch();
  const { isLoaded } = useAppSelector((state) => state.ordersProfile);

  const connect = () => dispatch(ordersProfileConnect(WS_URL));
  const disconnect = () => dispatch(ordersProfileDisconnect());

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  return !isLoaded ? (
    <AppLoading />
  ) : (
    <section className={styles["orders-container"]}>
      <OrdersFeedLayout isProfile />
    </section>
  );
}

export default ProfileOrdersPage;
