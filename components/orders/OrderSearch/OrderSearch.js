import { useContext, useEffect, useState } from "react";

import { Button, Container, Card } from "react-bootstrap";
import OrdersContext from "../../../store/orders-context";
import ExamplePicker from "./ExamplePicker";
import classes from "./OrderSearch.module.css";

function OrderSearch() {
  const ctxOrders = useContext(OrdersContext);

  const [selectedDate, setSelectedDate] = useState(ctxOrders.date);
  const [showPicker, setShowPicker] = useState(false);

  // useEffect(() => {
  //   setShowPicker(false);
  // }, [showPicker]);

  // function submitHandler(event) {
  //   event.preventDefault();

  //   ctxOrders.setDate(selectedDate);
  // }
  // console.log(selectedDate);
  return (
    <Container fluid className={classes.pickerContainer}>
      {/* <h2 className="text-center">Sélectionner une date</h2> */}
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      {/* <Card align="left"> */}
      {showPicker ? (
        <ExamplePicker
          className={classes.picker}
          selDate={selectedDate}
          changeDate={setSelectedDate}
        />
      ) : (
        <Button onClick={() => setShowPicker((prevState) => !prevState)}>
          Changer de date
        </Button>
      )}
      {/* </Card> */}
      {/* <Button type="submit" className="primary">
          Chercher
        </Button> */}
      {/* </form> */}
    </Container>
  );
}

export default OrderSearch;
