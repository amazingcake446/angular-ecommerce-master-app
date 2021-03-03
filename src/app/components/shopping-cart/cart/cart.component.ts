import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartTotal = 0;
  
  cartItems = this.cartService.getItems(); 

 /*  retrievedData = this.localStorage.getItem('cart'); 
  cartItemTest = JSON.parse(this.retrievedData);  */
  /* cartItems = this.localStorage.carts;   */
/*   JSON.parse(localStorage.getItem("names")); */
/*  cartItems: CartItem[] =  this.localStorage.getItem('cart'); */

  constructor(private cartService: CartitemsService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  this.calcTotal(); 
    
  }

  calcTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}