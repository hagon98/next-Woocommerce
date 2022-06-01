import { createContext, useEffect, useState } from "react";
import addZeroBeforeDateNumber from "../components/utils/functions";

const OrdersContext = createContext({
  date: null,
  statuses: [],
  orders: [],
  setOrders: function (ordersToLoad) {},
  setDate: function (dateChange) {},

  dateTo8Digits: function (addZero) {},
  converDateToHuman: function (uneDate) {},
});
const _order = {
  status: "en cours",
  id: "25",
  shipping: {
    first_name: "Laurent",
    last_name: "Pierre",
    address_1: "XXXXXXX",
  },
  line_items: [],
};

const _STATUSES = [
  "pending",
  "processing",
  "on-hold",
  "completed",
  "cancelled",
  "refunded",
  "failed",
];

export function OrdersContextProvider(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loadedOrders, setLoadedOrders] = useState([]);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  function setOrdersHandler(orders) {
    setLoadedOrders(orders);
    console.log("setLoadedOrders");
  }

  function setDateHandler(date) {
    setSelectedDate(date);
    console.log("une Date");
  }

  function dateTo8DigitsHandler(addZero) {
    console.log("add", addZero);
    const y = new Date(addZero).getFullYear();
    const m = new Date(addZero).getMonth() + 1;
    const d = new Date(addZero).getDate();
    const newUrl =
      y.toString() + addZeroBeforeDateNumber(m) + addZeroBeforeDateNumber(d);
    console.log("nouveau", newUrl);
    return newUrl;
  }

  function convertDateToHumanHandler(uneDate) {
    const humanReadableDate = new Date(uneDate).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return humanReadableDate;
  }

  const context = {
    date: selectedDate,
    orders: loadedOrders,
    statuses: _STATUSES,
    setOrders: setOrdersHandler,
    setDate: setDateHandler,

    dateTo8Digits: dateTo8DigitsHandler,
    converDateToHuman: convertDateToHumanHandler,
    // showMenu: showMenuBarHandler,
    // switchDarkMode: switchDarkModeHandler,
    // switchOrientation: switchOrientationHandler,
    // setMobile: setMobileHandler,
    // unsetMobile: unsetMobileHandler,
    // isMobile: isMobile,
  };

  return (
    <OrdersContext.Provider value={context}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export default OrdersContext;
