import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  connect as ordersFeedConnect,
  disconnect as ordersFeedDisconnect,
} from "../../store/ordersFeed/actions";
import styles from './feed.module.css'
import OrdersFeedLayout from "../../components/orders-feed/orders-feed-layout";

const WS_URL = "wss://norma.nomoreparties.space/orders/all";

function FeedPage() {
  const dispatch = useAppDispatch();

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
        <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
        <div className={styles.layout}>
          <OrdersFeedLayout />
        </div>
      </main>
    </div>
  );
}

export default FeedPage;
