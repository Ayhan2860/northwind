import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
 getAllCategories():Observable<ListResponseModel<Category>>{
   let newPath = environment.apiUrl +"/categories/getall"
   return this.httpClient.get<ListResponseModel<Category>>(newPath);
 }

}
