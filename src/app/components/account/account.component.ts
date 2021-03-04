import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model); 
    
  }
  
}
