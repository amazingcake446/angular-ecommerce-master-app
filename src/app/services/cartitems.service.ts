import { Injectable, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  

  cartTotal = 0; 
  cartItems = [
    /* {productId: 1, productName: 'Product 1', qty: 1, price: 100, imageUrl:'../../../../../assets/images/item1.webp'},
    {productId: 1, productName: 'Product 1', qty: 1, price: 100, imageUrl:'../../../../../assets/images/item1.webp'},
    {productId: 1, productName: 'Product 1', qty: 1, price: 100, imageUrl:'../../../../../assets/images/item1.webp'}, */
  /*   {productId: 1, productName: 'Product 2', qty: 1, price: 100},
    {productId: 1, productName: 'Product 3', qty: 1, price: 100}, */
  ]; 

  constructor() { }


 

  getItems() {
    return this.cartItems; 
  }
  //delete method

/*   deleteCartItem(product: Product) {
    let cartItemIndex = this.cartItems.indexOf(product);
  }
 */
  // added method
  addToCart(product: Product) {
    console.log(product);
    console.log(this.cartItems);

    let cartItem = this.cartItems.find(x => x.productId == product.id);

    if(cartItem) {
      console.log("Product found - Add quantity by 1")
      let cartItemIndex = this.cartItems.indexOf(cartItem);
      this.cartItems[cartItemIndex].qty++; 
    }
    else {
      console.log("Product not found - Add product to cart")
      this.cartItems.push({
        productId: product.id,
        productName: product.title, 
        qty: 1, 
        price: product.price,
        imageUrl: product.imageUrl
      });
    }

   /* if(this.cartItems.length === 0){
      this.cartItems.push({
        productId: product.id,
        productName: product.title, 
        qty: 1, 
        price: product.price
      })
    } else {

      /* for(let i in this.cartItems){
        if(this.cartItems[i].productId === product.id) {
         this.cartItems[i].qty++; 
        }
        else {
         this.cartItems.push({
           productId: product.id,
           productName: product.title, 
           qty: 1, 
           price: product.price
         })
       }
     } */
    //}
  }

  
}
