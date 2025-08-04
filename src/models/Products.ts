export class ProductDto {
    id: string;
    name: string;
    quantity: number;
    description?: string;
    categoryId?: string;

    constructor(
        id: string,
        name: string,
        quantity: number,
        description?: string,
        categoryId?: string
    ) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.categoryId = categoryId;
    }
}
