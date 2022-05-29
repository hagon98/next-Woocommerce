import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import OrderFilter from "../../components/orders/OrderFilter/OrderFilter";

import OrderList from "../../components/orders/OrderList/OrderList";
import OrderSearch from "../../components/orders/OrderSearch/OrderSearch";
import addZeroBeforeDateNumber from "../../components/utils/functions";

function OrderPage(props) {
  const router = useRouter();
  const { success, orders } = props;

  const date = new Date();
  //const apiDate = [2022, "05", 10];

  const month = addZeroBeforeDateNumber(date.getMonth() + 1);
  const day = addZeroBeforeDateNumber(date.getDate());

  const arrayDate = [date.getFullYear(), month, day - 1];
  const todayDate = arrayDate.join("");

  console.log(todayDate);
  // return;

  function findOrderByStatus(status) {
    const path = `/orders/${status}`;

    router.push(path);
  }

  function findOrdersHandler(date) {
    const fullPath = `/orders/${date}`;

    router.push(fullPath);
  }

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <OrderFilter orderStatus={orders.status} onSearch={findOrderByStatus} />
        <OrderSearch onSearch={findOrdersHandler} />
      </div>
      <>
        {!success ? (
          <p>Loading...</p>
        ) : (
          <OrderList test={"test"} date={todayDate.toString} orders={orders} />
        )}
      </>
    </Container>
  );
}

export async function getStaticProps() {
  const server = process.env.NEXT_PUBLIC_SITE_URL;
  const response = await fetch(`${server}/api/get-orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      success: data.success,
      orders: data.orders,
    },
  };
}

export default OrderPage;
