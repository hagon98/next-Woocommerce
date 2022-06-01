import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { OrdersContextProvider } from "../store/orders-context";

function MyApp({ Component, pageProps }) {
  return (
    <OrdersContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OrdersContextProvider>
  );
}

export default MyApp;
