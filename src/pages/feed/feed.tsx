import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  connect as ordersFeedConnect,
  disconnect as ordersFeedDisconnect,
} from "../../store/ordersFeed/actions";
import styles from "./feed.module.css";
import OrdersFeedLayout from "../../components/orders-feed/orders-feed-layout";
import OrdersFeedStat from "../../components/orders-feed/orders-feed-stat";
import AppLoading from "../../components/app-loading/app-loading";

const WS_URL = "wss://norma.nomoreparties.space/orders/all";

function FeedPage() {
  const dispatch = useAppDispatch();
  const { isLoaded } = useAppSelector((state) => state.ordersFeed);

  const connect = () => dispatch(ordersFeedConnect(WS_URL));
  const disconnect = () => dispatch(ordersFeedDisconnect());

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className='container pt-10 pb-10'>
      <main>
        <h1 className='text text_type_main-large mb-5'>Лента заказов</h1>

        {!isLoaded && <AppLoading />}
        {isLoaded && (
          <div className={styles.layout}>
            <section className={styles['orders-container']}>
              <OrdersFeedLayout />
            </section>
            <OrdersFeedStat />
          </div>
        )}
      </main>
    </div>
  );
}

export default FeedPage;
