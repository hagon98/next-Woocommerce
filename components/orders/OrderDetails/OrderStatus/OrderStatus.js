import classes from "./OrderStatus.module.css";

function OrderStatus({ orderStatus }) {
  let status = orderStatus;
  let currentClass;

  switch (status) {
    case "pending":
      currentClass = classes.pending;
      break;

    case "processing":
      currentClass = classes.processing;
      break;
    case "on-hold":
      currentClass = classes.onHold;
      break;
    case "completed":
      currentClass = classes.completed;
      break;
    case "cancelled":
      currentClass = classes.cancelled;
      break;
    case "refunded":
      currentClass = classes.refunded;
      break;
    case "failed":
      currentClass = classes.failed;
      break;

    default:
      break;
  }

  console.log("currentClass", currentClass, status);
  return (
    <div>
      <ul>
        <li className={currentClass}> {status} </li>
      </ul>
    </div>
  );
}

export default OrderStatus;
