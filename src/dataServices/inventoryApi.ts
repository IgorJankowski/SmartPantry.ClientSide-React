import { inventoryApi } from "../../config";
import type { ProductFormModel } from "../models/ProductFormModel";

export async function listProducts() {
  const response = await fetch(`${inventoryApi}/list-products`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export async function addProduct(productFormContext: ProductFormModel) {
  const response = await fetch(`${inventoryApi}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productFormContext),
  });
  const data = await response.json();
  return data;
}
