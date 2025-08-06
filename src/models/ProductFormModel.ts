export class ProductFormModel {
  name: string;
  quantity: number;
  description?: string;
  category?: number;

  constructor(
    name: string,
    quantity: number,
    description?: string,
    category?: number
  ) {
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.category = category;
  }
}
