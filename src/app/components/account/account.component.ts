import { Component, OnInit } from '@angular/core';

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
