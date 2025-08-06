import { useState } from "react";
import type { ProductsListProps } from "./ProductsListTypes";
import { addProduct } from "../../dataServices/inventoryApi";
import type { ProductFormModel } from "../../models/ProductFormModel";

const ProductsList = ({ products, onProductAdded }: ProductsListProps) => {
  const [isCreating, setCreating] = useState(false);
  const [categoryList, setCategoryList] = useState([
    { id: 0, name: "- select -" },
    { id: 1, name: "dry ingredients" },
  ]);
  const [newProduct, setNewProduct] = useState<ProductFormModel>({
    name: "",
    quantity: 0,
    category: 0,
    description: "",
  });

  function resetForm() {
    setNewProduct({
      name: "",
      quantity: 0,
      category: 0,
      description: "",
    });
  }

  async function handleSaveProduct() {
    try {
      const response = await addProduct(newProduct);

      if (onProductAdded && response.message == "Product added") {
        onProductAdded(response);
      } else {
        throw new Error("");
      }

      resetForm();
      setCreating(false);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  }

  async function toggleUpsertRow() {
    if (isCreating) {
      await handleSaveProduct();
    } else {
      setCreating(true);
    }
  }

  function handleFieldChange(field: string, value: string | number) {
    setNewProduct({
      ...newProduct,
      [field]: value,
    });
  }

  function cancel() {
    resetForm();
    setCreating(false);
  }

  return (
    <div>
      <h2>Products List</h2>
      <table className="table-auto">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
            </tr>
          ))}
          {isCreating ? (
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                />
                <input
                  type="number"
                  min={0}
                  max={5}
                  name="quantity"
                  placeholder="quantity"
                  onChange={(e) =>
                    handleFieldChange("quantity", e.target.value)
                  }
                />
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={(e) =>
                    handleFieldChange("description", e.target.value)
                  }
                />
                <select
                  name="category"
                  onChange={(e) =>
                    handleFieldChange("category", e.target.value)
                  }
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
      {isCreating ? (
        <div className="pr-8">
          <button className="pr-8" onClick={cancel}>
            Cancel
          </button>
          <button onClick={handleSaveProduct}>Save Product</button>
        </div>
      ) : (
        <button onClick={() => toggleUpsertRow()}>Add product</button>
      )}
    </div>
  );
};

export default ProductsList;
