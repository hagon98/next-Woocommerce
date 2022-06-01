import OrderDetails from "../../OrderDetails/OrderDetails";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import { isEmpty } from "lodash";

import classes from "./OrderListItem.module.css";
import OrderStatus from "../../OrderDetails/OrderStatus/OrderStatus";
import { useContext } from "react";
import OrdersContext from "../../../../store/orders-context";

function OrderListItem({ order }) {
  const ctxOrders = useContext(OrdersContext);

  if (isEmpty(order)) {
    return (
      <div>
        <span>orderlistitem vide</span>
      </div>
    );
  }

  const date = order.date_created;

  const humanReadableDate = ctxOrders.converDateToHuman(date);
  return (
    // <>
    <div>
      <div>
        <Accordion>
          <Accordion.Item className={classes.trow} eventKey="0">
            <Accordion.Header>
              <Container className={classes.itemHeader}>
                <span>
                  <OrderStatus orderStatus={order.status} />
                </span>
                <span width="100">{order.id}</span>
                <span width="200">
                  {order.shipping.first_name + " " + order.shipping.last_name}
                </span>
                <span width="200">{humanReadableDate}</span>
                <span width="200">{order.shipping.address_1}</span>
              </Container>
            </Accordion.Header>
            <Accordion.Body className={classes.colorBody}>
              <OrderDetails order={order} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    //</>
  );
}

export default OrderListItem;
