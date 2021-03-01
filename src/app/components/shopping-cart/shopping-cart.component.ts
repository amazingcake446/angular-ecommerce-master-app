import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import {CartComponent} from 'src/app/components/shopping-cart/cart/cart.component'
import { Product } from 'src/app/models/product';
import { CartitemsService } from 'src/app/services/cartitems.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private msg: MessengerService, private cartList: CartitemsService) { }

  ngOnInit(): void {
  
  }

  /* addProductToCart(product: Product){

    if(this.cartList.cartItems.length === 0){
      this.cartList.cartItems.push({
        productId: product.id,
        productName: product.title, 
        qty: 1, 
        price: product.price
      })

    } else {
      for(let i in this.cartList.cartItems){
        if(this.cartList.cartItems[i].productId === product.id) {
         this.cartList.cartItems[i].qty++; 
        }
        else {
         this.cartList.cartItems.push({
           productId: product.id,
           productName: product.title, 
           qty: 1, 
           price: product.price
         })
       }
     }
    }
  } */
}
