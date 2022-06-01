import { isArray, isEmpty } from "lodash";
import { Container } from "react-bootstrap";

import OrderListItem from "./OrderListItem/OrderListItem";

import classes from "./OrderList.module.css";
import { useContext, useEffect } from "react";
import OrdersContext from "../../../store/orders-context";

function OrderList({ date }) {
  const ctxOrders = useContext(OrdersContext);
  const orders = ctxOrders.orders;
  const uneDate = date;

  let dateFormatted = new Date();
  if (uneDate) {
    const newDate = [
      Number(uneDate[0].slice(0, 4)),
      Number(uneDate[0].slice(4, 6)),
      Number(uneDate[0].slice(6)),
    ];
    dateFormatted = newDate;
  }
  const newDate = new Date(dateFormatted);

  // console.log("order list date :", newDate);

  // useEffect(() => {

  // }, []);

  if (isEmpty(orders) || !isArray(orders)) {
    return (
      <div className={classes.listEmpty}>
        <h2>Pas de commandes trouvées pour cette date </h2>
        <h3>{ctxOrders.converDateToHuman(newDate)}</h3>
      </div>
    );
  }

  return (
    <>
      <h2>Commandes Reçus après le {ctxOrders.converDateToHuman(newDate)}</h2>
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
