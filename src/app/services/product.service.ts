import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'; 
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs'; 


import {productsUrl} from 'src/app/config/api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) { }
 // TODO: Populate products from an API and return an Observable
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl); 
  }
}
