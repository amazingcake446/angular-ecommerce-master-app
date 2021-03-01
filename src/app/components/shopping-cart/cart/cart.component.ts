import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartTotal = 0;

  cartItems = this.cartService.getItems(); 
 /* cartItems: CartItem[] = [];  */

  constructor(private cartService: CartitemsService) { }

  ngOnInit(): void {
    this.calcTotal();
    /* this.loadCartItems();  */
  }

 /*  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      console.log(items); 
     this.cartItems = items; 
    })
  } */

  calcTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}