import { Component, OnInit } from '@angular/core';
import { CartitemsService } from 'src/app/services/cartitems.service';
import {FormControl, Validators} from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 
  constructor(private cartService: CartitemsService, private localStorage: LocalStorageService) { }
  model: any = {}
  ngOnInit(): void {
    
  }
  
  itemsInCart = this.cartService.cartItems

  login(){
    console.log(this.model);
    
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
}
