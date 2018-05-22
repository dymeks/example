import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/all_products');
  }

  createProduct(newProduct){
    console.log(newProduct);
    return this._http.post('/new_product',newProduct);
  }

  findProduct(id){
    return this._http.get('/find_product/'+id);
  }

  updateProduct(product){
    return this._http.put('/update_product/'+product.id,product);
  }

  removeProduct(id){
    return this._http.delete('/delete_product/'+id);
  }
}
