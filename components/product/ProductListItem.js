import Link from "next/link";
import Image from "../image";
import { isEmpty } from "lodash";

const ProductListItem = ({ product }) => {
  if (isEmpty(product)) {
    return null;
  }
  const img = product.images?.[0] ?? {};

  const productType = product?.type ?? "";
  return (
    <div className="mt-4 mb-8 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
      <h3>id {product.id}</h3>
      <Link href={product?.permalink ?? "/"}>
        <a>
          <Image
            sourceUrl={img?.src ?? ""}
            altText={img?.alt ?? ""}
            title={product?.name ?? ""}
            width="380"
            height="380"
          />
          <h6 className="font-bold uppercase my-2 tracking-0.5px">
            {product?.name ?? ""}
          </h6>
        </a>
      </Link>
    </div>
  );
};

export default ProductListItem;
