import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModels';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
 
  getAllProducts():Observable<ListResponseModel<Product>>
  {
     let newPath = environment.apiUrl +"/products/getall"
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = environment.apiUrl +"/products/getbycatgoryid?id="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    let newPath = environment.apiUrl +"/products/add";
    return this.httpClient.post<ResponseModel>(newPath,product);
  }


}
