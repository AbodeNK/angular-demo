import { orderItem } from "./orderItem";
import { Shipping } from "./Shipping ";
import { ShoppingCart } from "./ShoppingCart";

export class Order {
    id: string;
    datePlaced: number;
    items: orderItem[];
  
    constructor(
      public userId: string,
      public shipping: Shipping,
      shoppingCart: ShoppingCart
    ) {
      this.datePlaced = new Date().getTime();
  
      this.items = shoppingCart.items.map((i) => {
        return {
          product: {
            ProductsName: i.product.ProductsName,
            imageURL: i.product.imageURL,
            Price: i.product.Price,
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice,
        };
      });
    }
  }