// import Error from "next/error";
// import { Fragment, useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import OrderList from "../../components/orders/OrderList/OrderList";
// import OrderResult from "../../components/orders/OrderSearch/OrderResult";
// import DUMMY_ORDER from "../../components/orders/_dummy_order";
// import useSWR from "swr";
// //import { Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

// async function FilteredOrdersPage(props) {
//   const [loadedOrders, setLoadedOrders] = useState();
//   const router = useRouter();
//   const filterData = router.query.slug;

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const { data, error } = useSWR(`${server}/api/get-orders`, fetcher);
//  console.log("Data useSWR", data);
//console.log("Error useSWR", error);
//   const server = process.env.NEXT_PUBLIC_SITE_URL;
//   const response = await fetch(`${server}/api/get-orders`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "appilcation/json",
//     },
//   });
//   const data = await response.json();
//   useEffect(() => {
//     if (data) {
//       const orders = [];

//       for (const key in data) {
//         orders.push({
//           id: key,
//           ...data[key],
//         });
//       }

//       setLoadedOrders(orders);
//     }
//   }, [data]);

//   if (error) {
//     console.warn("ERRRRRRRR", error);
//     return (
//       <p className="center">
//         Error <br />{" "}
//       </p>
//     );
//   }
//   if (!loadedOrders) {
//     return <p className="center">Chargement...</p>;
//   }

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12 ||
//     Error
//   ) {
//     return (
//       <Fragment>
//         <Error>
//           <p>Filtre invalide</p>
//         </Error>
//         <div className="center">
//           <Button link="/orders">Voir toutes les commandes</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const filteredOrders = loadedOrders.filter((order) => {
//     const orderDate = new Date(order.date);
//     return (
//       orderDate.getFullYear() === numYear &&
//       orderDate.getMonth() === numMonth - 1
//     );
//   });

//   if (!filteredOrders || filteredOrders.length === 0) {
//     return (
//       <Fragment>
//         <Error>
//           <p>Aucune commande trouvé !</p>
//         </Error>
//         <div className="center">
//           <Button link="/orders">Voir toutes les commandes</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const date = new Date(numYear, numMonth - 1);
//   return (
//     <Fragment>
//       <OrderResult date={date} />
//       <OrderList items={filteredOrders} />
//     </Fragment>
//   );
// }

// export default FilteredOrdersPage;
