import { inventoryApi } from "../../config";

export async function listProducts() {
  const response = await fetch(`${inventoryApi}list-products`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
