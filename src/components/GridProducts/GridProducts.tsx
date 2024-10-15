import { Product } from "../Product/Product";
import "./GridProducts.css";
import { Product as ProductItem } from "../../utils/interfaces/Product";

export const GridProducts = ({ products }: { products: ProductItem[] }) => {
  return (
    <>
      <div className="grid">
        {products.map((item: ProductItem) => {
          return <Product item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
