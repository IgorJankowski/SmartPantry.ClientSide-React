import { createFileRoute } from "@tanstack/react-router";
import ProductsList from "../components/ProductsList/ProductsList";
import { useEffect, useState } from "react";
import { listProducts } from "../dataServices/inventoryApi";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await listProducts();
    setProducts(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div>
        {/* <div className="mb-4">
        <span>top bar with product search and maybe recipe search? or that may be a diff view</span>
      </div>

      <div className="mb-4"><span>action bar shopping list, check inventory</span></div>

      <div className="mb-4">
        <span>That's a placeholder for notifications like num of stored items, </span>
      </div>
      <div className="mb-4"><span>soon expiring items with suggestions how to use them</span></div>
      <div className="mb-4">
        <span>products that low in quantity like milk, flour, butter, eggs</span>
      </div>
      <div className="mb-4"><span>and shopping list</span></div>
      <div className="mb-4">
        <span>maybe some ai powered suggestions like You've got x try to cook Y</span>
      </div>

      <div>
        <span>
          In future there may be feature to add calories intake(fitness app feat) and suggestions of
          menu to fit your macro and cal needs
        </span>
      </div> */}
      </div>
      <ProductsList products={products}></ProductsList>
    </main>
  );
}
