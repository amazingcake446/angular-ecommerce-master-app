import { Component, OnInit } from '@angular/core';

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
  
  cartItems = this.cartlist.getItems(); 
  
  constructor(private cartlist: CartitemsService) { }
  
  ngOnInit(): void {
    /* console.log(this.cartItems);  */
    
    // count total 
    this.cartTotal = 0; 
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
    })
 

    
  }

}