import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {name:"",quantity:"",price:"",id:""}
    this.errors = [];
  }

  createNewProduct(){
    this.errors = [];
    var newId = Math.floor(Math.random()*10000);
    this.newProduct.id = newId;
    console.log(this.newProduct.id);
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      console.log(data);
      if(data['status']){
        this._router.navigate(['/']);
      } else {
        if(data['body']['errors']['name']){
          this.errors.push(data['body']['errors']['name']['message']);
        }

        if (data['body']['errors']['price']){
          this.errors.push(data['body']['errors']['price']['message']);
        }

         if(data['body']['errors']['quantity']){
          this.errors.push(data['body']['errors']['quantity']['message']);
        } 
      }
      
    });
  }
}
