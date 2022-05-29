// import { isArray, isEmpty } from "lodash";
// import { Container } from "react-bootstrap";

// import OrderListItem from "./OrderListItem/OrderListItem";

// import classes from "./OrderList.module.css";

// function OrderList({ orders }) {
//   if (isEmpty(orders) || !isArray(orders)) {
//     return (
//       <div className={classes.listEmpty}>
//         <h3>Pas de commandes trouvé pour cette date</h3>
//       </div>
//     );
//   }

//   return (
//     <>
//       <h2>Commandes Reçus</h2>
//       <Container fluid>
//         <div className={classes.headStyle}>
//           <span>#ID</span>
//           <span>Name</span>
//           <span>Heures</span>
//           <span>Adresse</span>
//         </div>
//         <div>
//           {orders.length
//             ? orders.map((order) => {
//                 return <OrderListItem order={order} key={order?.id} />;
//               })
//             : null}
//         </div>
//       </Container>
//     </>
//   );
// }

// export default OrderList;

import { isArray, isEmpty } from "lodash";
import { Container } from "react-bootstrap";

import OrderListItem from "./OrderListItem/OrderListItem";

import classes from "./OrderList.module.css";

function OrderList({ orders }) {
  if (isEmpty(orders) || !isArray(orders)) {
    return (
      <div className={classes.listEmpty}>
        <h3>Pas de commandes trouvé pour cette date </h3>
      </div>
    );
  }

  return (
    <>
      <h2>Commandes Reçus après le </h2>
      <Container fluid>
        <div className={classes.headStyle}>
          <span>Status</span>
          <span>#ID</span>
          <span>Name</span>
          <span>Heures</span>
          <span>Adresse</span>
          <span>Détails</span>
        </div>
        <div>
          {orders.length
            ? orders.map((order) => {
                return <OrderListItem order={order} key={order?.id} />;
              })
            : null}
        </div>
      </Container>
    </>
  );
}

export default OrderList;
