import type { ProductDto } from "../../models/ProductDto";

export interface ProductsListProps {
  products: ProductDto[];
  onProductAdded?: (product: ProductDto) => void;
  onProductUpdated?: (product: ProductDto) => void;
  onProductDeleted?: (productId: string) => void;
}
