import { useState } from "react";

import { Button, Container } from "react-bootstrap";
import ExamplePicker from "./ExamplePicker";
import classes from "./OrderSearch.module.css";

function OrderSearch(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // console.log("yearInput", yearInputRef, monthInputRef);

  function submitHandler(event) {
    event.preventDefault();
    // setSelectedDate(20220521);

    props.onSearch(selectedDate);
  }

  return (
    <Container>
      <h2 className="text-center">Sélectionner une date</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <ExamplePicker selDate={selectedDate} changeDate={setSelectedDate} />
        <Button type="submit" className="primary">
          Chercher
        </Button>
      </form>
    </Container>
  );
}

export default OrderSearch;
