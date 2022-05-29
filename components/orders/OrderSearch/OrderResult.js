import { Button } from "react-bootstrap";
import classes from "./OrderResult.module.css";

function OrderResult(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.result}>
      <h1>Commandes du mois de {humanReadableDate}</h1>
      <Button link="/orders">Afficher tous les Commandes</Button>
    </section>
  );
}

export default OrderResult;
