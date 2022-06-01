import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

import "react-datepicker/dist/react-datepicker.css";
import addZeroBeforeDateNumber from "../../utils/functions";
import { useRouter } from "next/router";
import OrdersContext from "../../../store/orders-context";
import OrderList from "../OrderList/OrderList";

const ExamplePicker = ({ className }) => {
  const ctxOrders = useContext(OrdersContext);
  const [startDate, setStartDate] = useState(ctxOrders.date);
  const router = useRouter();
  const pathUrl = "orders";

  // useEffect(() => {
  //   console.log("path", router.pathname);
  //   if (router.pathname.startsWith("/" + pathUrl)) {
  //     console.log("path", router.pathname);
  //     pathUrl = "";
  //   }
  // }, [router]);
  function handleOnChange(e) {
    setStartDate(e);
    //console.log("start", ctxOrders.dateNow(e));

    router.push(`/${pathUrl}/${ctxOrders.dateTo8Digits(e)}`);
  }
  return (
    <DatePicker
      className={className}
      selected={startDate}
      onChange={handleOnChange}
      locale="fr"
    />
  );
};

export default ExamplePicker;
