import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { HttpHeaders } from "@angular/common/http";
//import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) {
  }



  private _productUrl = "https://amarecommerceapi.azurewebsites.net/api/product";
  getProducts(): Observable<IProduct[]> {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const _headers = new HttpHeaders();
    _headers.set('Access-Control-Allow-Origin', '*');
    _headers.set('Accept', '*/*');

    return this._http.get<IProduct[]>(this._productUrl, { headers: _headers })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw("custom error" + err.message);
  }

}
