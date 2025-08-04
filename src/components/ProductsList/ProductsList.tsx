import type { ProductsListProps } from "./ProductsListTypes";

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
