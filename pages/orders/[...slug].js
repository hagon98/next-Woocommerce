import { useRouter } from "next/router";
import { identity } from "lodash";
import { Container } from "react-bootstrap";
import OrderList from "../../components/orders/OrderList/OrderList";
import OrderSearch from "../../components/orders/OrderSearch/OrderSearch";

function Page({ data }) {
  const router = useRouter();
  const slug = router.query.slug[0];

  const newDate = new Date(
    slug.slice(0, 4),
    Number(slug.slice(4, 6)) - 1,
    slug.slice(6)
  );

  console.log(newDate);

  // Render data...
  // console.log("data", data);

  // function findOrdersHandler(year, month) {
  //   const fullPath = `/orders/${year}/${month}`;

  //   router.push(fullPath);
  // }

  if (!data) {
    <p>OUPS</p>;
  }

  return (
    <Container>
      {/* <OrderSearch onSearch={findOrdersHandler} /> */}
      {/* <h2>Commande du {router.query}</h2> */}
      {!data.success ? <p>Loading...</p> : <OrderList orders={data.orders} />}
    </Container>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API

  console.log("slug", context.params.slug);
  // ICI LA OUI CETS CA

  const res = await fetch(
    `http://localhost:3000/api/get-orders?slug=` + context.params.slug
  );

  // console.log("res.json", res.json());
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
