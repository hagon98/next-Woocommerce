import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import addZeroBeforeDateNumber from "../../components/utils/functions";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export default async function handlerOrders(req, res) {
  const date = new Date();
  const month = addZeroBeforeDateNumber(date.getMonth() + 1);
  const day = addZeroBeforeDateNumber(date.getDate());
  const apiDate = [date.getFullYear(), month, day - 1];

  let dateFormatted;

  const { slug } = req.query;

  // console.log("req", req.query);
  dateFormatted = apiDate.join("-") + "T00:00:00";

  if (req.query.slug) {
    const newDate = [
      Number(slug.slice(0, 4)),
      addZeroBeforeDateNumber(Number(slug.slice(4, 6))),
      addZeroBeforeDateNumber(Number(slug.slice(6))),
    ];
    dateFormatted = newDate.join("-") + "T00:00:00";
  }

  const responseData = {
    success: false,
    orders: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("orders", {
      per_page: perPage || 50,
      after: dateFormatted,
    });

    responseData.success = true;
    responseData.orders = data;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
