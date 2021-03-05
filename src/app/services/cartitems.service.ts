import { Injectable, Output } from '@angular/core';

import { Product } from '../models/product';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { map } from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {



  cartTotal = 0;

  cartItems =  JSON.parse(this.localStorage.getItem('cartArray')) || [];


  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  getItems() {
    this.calcTotal(); 
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
      this.localStorage.setItem('cartArray', JSON.stringify(this.cartItems))
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
     
      this.localStorage.setItem('cartArray', JSON.stringify(this.cartItems))
    }
  }

  deleteCartItem(product: Product) {
    console.log('delete item')
    let cartItemIndex = this.cartItems.indexOf(product);
    this.cartItems.splice(cartItemIndex, 1);
    this.localStorage.setItem('cartArray', JSON.stringify(this.cartItems))
  }

  increaseQty(product: Product) {
    console.log('Increased qty');
    let cartItemIndex = this.cartItems.indexOf(product);
    this.cartItems[cartItemIndex].qty++;
    this.localStorage.setItem('cartArray', JSON.stringify(this.cartItems))
  }

  decreaseQty(product: Product) {
    console.log('decrease qty');
    let cartItemIndex = this.cartItems.indexOf(product);
    if(this.cartItems[cartItemIndex].qty <= 1){
      this.deleteCartItem(product); 
    } else {
      this.cartItems[cartItemIndex].qty--;
    }
    
    this.localStorage.setItem('cartArray', JSON.stringify(this.cartItems))
  }

  calcTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }



  // get cart items with get method 
 /*  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl)
  } */

  // add items with post to cart
  /* addServiceApiCall(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product })
  } */

  // delete a product from cart 
 /*  deleteServiceApiCall(product: Product): Observable<any> {
    return this.http.delete(cartUrl, {product})
  } */

}
