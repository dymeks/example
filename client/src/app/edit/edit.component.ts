import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentProduct;
  initialState:any;
  productId;
  isReset=false;
  errors;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentProduct = {name:"",quantity:"",price:"",id:""}
    this.errors = [];
    this._route.params.subscribe((params: Params) => this.productId = params['id']);
    this.findCurrentProduct();
  }

  findCurrentProduct(){
    let observable = this._httpService.findProduct(this.productId);
   
    observable.subscribe(data =>{
      console.log(data);
      if(data['status']){
        
        this.initialState = data['product'];
        this.currentProduct = data['product'];
      } else {
        this.errors = data['body'];
      }
    })
  }

  editProduct(){
    this.errors = [];
    console.log("Im in EDIT PRODUCT!");
    
    let observable = this._httpService.updateProduct(this.currentProduct);
    observable.subscribe(data =>{
      console.log(data);
      if(data['status']){
        this._router.navigate(['/products']);
      } else { 
        console.log(data);
        if(data['body']['errors']['name']){
          this.errors.push(data['body']['errors']['name']['message']);
        }

        if (data['body']['errors']['price']){
          this.errors.push(data['body']['errors']['price']['message']);
        }

         if(data['body']['errors']['quantity']){
          this.errors.push(data['body']['errors']['quantity']['message']);
        }  
        // this.errors = data['body'];
      }
    })
  }
  resetFields(){
    console.log("I'm in reset!")
    console.log("This is this.currentProduct")
    console.log(this.currentProduct);
    console.log("This is INITIAL Product")
    console.log(this.initialState);
    this.ngOnInit();
    // this.currentProduct = this.initialProduct;
    // this._router.navigate(['/products/',this.initialProduct.id,'edit']);
  }
}
