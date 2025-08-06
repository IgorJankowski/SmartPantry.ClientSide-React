import { ProductFormModel } from "./ProductFormModel";

export class ProductDto extends ProductFormModel {
  id?: string;

  constructor(
    id: string,
    name: string,
    quantity: number,
    description?: string,
    category?: number
  ) {
    super(name, quantity, description, category);
    this.id = id;
  }
}
