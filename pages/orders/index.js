import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import OrderList from "../../components/orders/OrderList/OrderList";
import OrderSearch from "../../components/orders/OrderSearch/OrderSearch";
import addZeroBeforeDateNumber from "../../components/utils/functions";
import OrdersContext from "../../store/orders-context";

function OrderPage(props) {
  const router = useRouter();
  const { success, orders, error } = props;

  const ctxOrders = useContext(OrdersContext);

  useEffect(() => {
    ctxOrders.setOrders(orders);
  }, [ctxOrders, orders]);

  // useEffect(() => {
  //   router.push("/orders");
  // }, []);

  console.log("error", error);

  // if (!success) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Container>
      <div className="d-flex justify-content-center">
        {/* <h3>Date : {ctxOrders.date && ctxOrders.date.toString()}</h3> */}
        <OrderSearch />
      </div>
      <>{<OrderList orders={ctxOrders.orders} />}</>
    </Container>
  );
}

export async function getServerSideProps() {
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
