import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { Container } from "react-bootstrap";
import OrderList from "../../components/orders/OrderList/OrderList";
import OrderSearch from "../../components/orders/OrderSearch/OrderSearch";
import OrdersContext from "../../store/orders-context";

function Page({ data }) {
  const router = useRouter();
  const slug = router.query.slug[0];
  const ctxOrders = useContext(OrdersContext);

  useEffect(() => {
    ctxOrders.setOrders(data.orders);
  }, [ctxOrders, data.orders]);
  console.log(data.orders);

  // const newDate = new Date(
  //   slug.slice(0, 4),
  //   Number(slug.slice(4, 6)) - 1,
  //   slug.slice(6)
  // );

  //console.log("router", router.query.slug);
  // console.log(window.location.href);

  if (!data) {
    <p>OUPS</p>;
  }

  return (
    <Container>
      <OrderSearch />
      {!data.success ? (
        <p>Loading...</p>
      ) : (
        <OrderList date={router.query.slug} orders={data.orders} />
      )}
      {/* <a href="/orders" className="text-center">
        <strong>Retour</strong>
      </a> */}
    </Container>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(
    `http://localhost:3000/api/get-orders?slug=` + context.params.slug
  );

  const data = await res.json();

  return { props: { data } };
}

export default Page;
