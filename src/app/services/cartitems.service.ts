import { Injectable, Output } from '@angular/core';

import { Product } from '../models/product';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {



  cartTotal = 0;
  cartItems = [

  ];

  constructor(private http: HttpClient) { }

  getItems() {
    return this.cartItems
  }

  // added method
  addToCart(product: Product) {
    console.log(product);
    console.log(this.cartItems);

    let cartItem = this.cartItems.find(x => x.productId == product.id);

    if (cartItem) {
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
  }

  deleteCartItem(product: Product) {
    console.log('delete item')
    let cartItemIndex = this.cartItems.indexOf(product);
    this.cartItems.splice(cartItemIndex, 1);
  }

  increaseQty(product: Product) {
    console.log('Increased qty');
    let cartItemIndex = this.cartItems.indexOf(product);
    this.cartItems[cartItemIndex].qty++;
  }

  decreaseQty(product: Product) {
    console.log('decrease qty');
    let cartItemIndex = this.cartItems.indexOf(product);
    this.cartItems[cartItemIndex].qty--;
  }

  calcTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }



  // get cart items with get method 
  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl)
  }

  // add items with post to cart
  addServiceApiCall(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product })
  }

  // delete a product from cart 
 /*  deleteServiceApiCall(product: Product): Observable<any> {
    return this.http.delete(cartUrl, {product})
  } */

}
