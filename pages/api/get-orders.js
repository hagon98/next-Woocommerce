import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import addZeroBeforeDateNumber from "../../components/utils/functions";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export default async function handlerOrders(req, res) {
  let status = "any";

  switch (status) {
    case "pending":
      break;

    case "processing":
      break;
    case "on-hold":
      break;
    case "completed":
      break;
    case "cancelled":
      break;
    case "refunded":
      break;
    case "failed":
      break;

    default:
      // currentClass = "";
      // status = "Impossible quelque chose c'est mal passé !";
      break;
  }

  const date = new Date();
  //const apiDate = [2022, "05", 10];
  const month = addZeroBeforeDateNumber(date.getMonth() + 1);
  const day = addZeroBeforeDateNumber(date.getDate());

  const apiDate = [date.getFullYear(), month, day - 1];

  let dateFormatted;
  //console.log("date actuel", date);
  // console.log("apiDate", dateFormatted);
  const { slug } = req.query;
  // res.end(`Post: ${slug}`);
  console.log("req", req.query);
  dateFormatted = apiDate.join("-") + "T00:00:00";
  // console.log("set dateFormatted to TODAY value", dateFormatted);

  if (req.query.slug) {
    const newDate = [
      Number(slug.slice(0, 4)),
      addZeroBeforeDateNumber(Number(slug.slice(4, 6))),
      addZeroBeforeDateNumber(Number(slug.slice(6))),
    ];
    dateFormatted = newDate.join("-") + "T00:00:00";
    // console.log("set dateFormatted to $SLUG value", dateFormatted);
  }
  // console.log("datForma1", dateFormatted1);

  // console.log("DATE RECHERCHEE :", newDate);

  const responseData = {
    success: false,
    orders: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("orders", {
      per_page: perPage || 50,
      after: dateFormatted,
      status: status,
    });

    // T23:59:59
    responseData.success = true;
    responseData.orders = data;

    // console.log("respDat", responseData);
    res.json(responseData);
  } catch (error) {
    // console.log("ERR respDat", error);
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
