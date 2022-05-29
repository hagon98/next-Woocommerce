import ProductList from "../components/product/ProductList";

const Index = (props) => {
  const { success, products } = props;
  // console.log(products);

  return (
    <>{!success ? <p>Loading...</p> : <ProductList products={products} />}</>
  );
};

export async function getStaticProps() {
  const server = process.env.NEXT_PUBLIC_SITE_URL;
  const response = await fetch(`${server}/api/get-products`, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      success: data.success,
      products: data.products,
    },
    revalidate: 5000,
  };
}
export default Index;
