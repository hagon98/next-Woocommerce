import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import OrderList from "../OrderList/OrderList";
import classes from "./OrderFilter.module.css";

function OrderFilter(orderStatus) {
  const [orderFiltered, setOrderFiltered] = useState("tous les status");

  function onSelectHandler(event) {
    event.preventDefault();

    orderStatus.onSearch(orderFiltered);
  }

  return (
    <Container>
      <h3 className="text-center">Sélectionner un filtre</h3>
      <form className={classes.form} onSubmit={onSelectHandler}>
        <select
          id="status"
          defaultValue="tout les status"
          onClick={setOrderFiltered}
        >
          <option value="1">pending</option>
          <option value="2">processing</option>
          <option value="3">on-hold</option>
          <option value="4">completed</option>
          <option value="5">cancelled</option>
          <option value="6">refunded</option>
          <option value="7">failed</option>
        </select>
        <Button type="submit" className="primary">
          Okay
        </Button>
      </form>
    </Container>
  );
}

export default OrderFilter;
