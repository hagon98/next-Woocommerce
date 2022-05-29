import { forwardRef, useRef, useState } from "react";

import { Button, Card } from "react-bootstrap";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import classes from "./OrderDetails.module.css";
import OrderStatus from "./OrderStatus/OrderStatus";

function OrderDetails({ order }) {
  const ComponentToPrint = forwardRef((props, ref) => {
    ComponentToPrint.displayName = "ossef";
    return (
      <Card ref={ref} className={classes.itemToPrint}>
        <Card.Header>Commande #{order.id}</Card.Header>
        <hr></hr>
        <Card.Body>
          <h4 className={classes.bgColor}>
            Commande de :{" "}
            {order.shipping.first_name + " " + order.shipping.last_name}
          </h4>

          <h5>Arcticles:</h5>
          {order.line_items.map((item) => {
            return (
              <Card.Title key={item.id}>
                {item.quantity + "x" + " " + `${item.name}`}
              </Card.Title>
            );
          })}
          <hr></hr>
          <Card.Text>
            prix total :{order.total + " " + order.currency_symbol}
          </Card.Text>
          <Card.Text> Adresse: {order.shipping.address_1}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  const componentRef = useRef();

  return (
    <>
      <Card>
        <Card.Header>Commande #{order.id}</Card.Header>
        <hr></hr>
        <Card.Body className="d-flex justify-content-between">
          <h4>Arcticles:</h4>
          <div>
            {order.line_items.map((item) => {
              return (
                <Card.Title key={item.id}>
                  {item.quantity + "x" + " " + `${item.name}`}
                </Card.Title>
              );
            })}
          </div>
          <hr></hr>
          prix total :{order.total + " " + order.currency_symbol}
          {/* <OrderStatus order={order} /> */}
        </Card.Body>
      </Card>
      <ReactToPrint content={() => componentRef.current} copyStyles={true}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <Button onClick={handlePrint} variant="primary">
              Imprimer
            </Button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <div className={classes.toPrint}>
        <ComponentToPrint ref={componentRef} />
      </div>
    </>
  );
}

export default OrderDetails;
