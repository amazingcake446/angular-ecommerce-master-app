import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from 'src/app/components/shopping-cart/cart/cart.component'
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {AccountComponent} from 'src/app/components/account/account.component'; 
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { WishlistService } from './services/wishlist.service';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'newitems', component: ShoppingCartComponent},
  {path: 'cart', component: CartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'orderplaced', component: OrderplacedComponent},
  {path: 'likes', component: WishlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
