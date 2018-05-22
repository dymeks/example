import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts;
  errors;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe(data => {
      console.log(data);
      if(data['status']){
        this.allProducts = data['products'];
      } else {
        this.errors = data['body'];
      }
      
      // this.allAuthors = data;
    })
  }
}
