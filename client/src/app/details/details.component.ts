import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;
  productId;
  errors;
  disableDelete;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {name:"",quantity:"",price:"",id:""}
    this._route.params.subscribe((params: Params) => this.productId = params['id']);
    this.disableDelete = true;
    console.log(this.disableDelete);
    this.findProduct();
    this.checkIsDeletable();
  }

  findProduct(){
    let observable = this._httpService.findProduct(this.productId);
   
    observable.subscribe(data =>{
      console.log(data);
      if(data['status']){
        this.product = data['product'];
      } else {
        this.errors = data['body'];
      }
    })
  }
  checkIsDeletable(){
    console.log("I'M IN DELETE")
    console.log(this.disableDelete);
    if(this.product.quantity === 0){
      this.disableDelete = false;
    }
  }

  deleteProdct(){
    let observable = this._httpService.removeProduct(this.productId);
   
    observable.subscribe(data =>{
      console.log(data);
      if(data['status']){
        this.product = data['product'];
        this._router.navigate(['/products']);
      } else {
        this.errors = data['body'];
      }
    })
  }

}
