import ProductListItem from "./ProductListItem";

import { isArray, isEmpty } from "lodash";

const ProductList = ({ products }) => {
  if (isEmpty(products) || !isArray(products)) {
    return null;
  }

  return (
    <div className="d-flex">
      <h2>Liste de produits</h2>
      {products.length
        ? products.map((product) => {
            return <ProductListItem key={product?.id} product={product} />;
          })
        : null}
    </div>
  );
};

export default ProductList;
