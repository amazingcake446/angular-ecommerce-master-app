import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartItems = [
    {id: 1, productId: 1, productName: 'Shirt1', qty: 4, price: 100},
    {id: 1, productId: 1, productName: 'Shirt2', qty: 3, price: 100},
    {id: 1, productId: 1, productName: 'Shirt3', qty: 1, price: 100},
    {id: 1, productId: 1, productName: 'Shirt4', qty: 2, price: 100}
]; 
  cartTotal = 0; 
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price); 
    })
  }

}
