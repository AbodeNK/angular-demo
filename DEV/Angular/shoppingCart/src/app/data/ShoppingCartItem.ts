import { productData } from "./newProductsData";


export class ShoppingCartItem {
  constructor(public product: productData, public quantity: number) {}

  get totalPrice() {
    return this.product.Price * this.quantity;
  }
}