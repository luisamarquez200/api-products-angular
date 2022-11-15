import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ApirestService {
   url = 'http://localhost:4000/api/v1/products/'

  constructor(private http : HttpClient) {

   }


   getProducts(): Observable<any>{
    return this.http.get(this.url)
  }

  saveProducts(product : Product): Observable<any>{
    return this.http.post(this.url, product);
  }

  deleteProducts(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  }
}
