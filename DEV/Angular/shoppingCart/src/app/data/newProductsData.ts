export interface productData {
    uid?:string;
    categories?:string;
    ProductsName?:string;
    titel?: string;
    Price?: number;
    imageURL?: string;
   
}
export interface cartItem{
    product? :  productData;
    quantity?:number;
}
