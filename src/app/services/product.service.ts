import {Injectable} from '@angular/core';
import {ProductOutput} from '../dto/productOutput';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductInput} from '../dto/product-input';
import {AuthService} from './AuthService';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public authHttp: HttpClient, private auth: AuthService) { }

  getAllProducts()
  {
    return this.authHttp.get<ProductOutput[]>('https://softwarefullproductcomponent.azurewebsites.net/api/Products');
    // await this.authHttp.get<ProductOutput[]>('https://localhost:44366/api/Products').subscribe((products) => {
    //   console.log(products);
    //   productList = products as ProductOutput[];
    // }, (error) => console.error(error));
  }

  getProduct(productSlug: string): Observable<ProductOutput>
  {
    return this.authHttp.get<ProductOutput>(`https://softwarefullproductcomponent.azurewebsites.net/api/Products/${productSlug}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    });
  }

  createProduct(data: ProductInput) {
    this.authHttp.post('https://softwarefullproductcomponent.azurewebsites.net/api/Products', data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));
    console.log(data);
  }

  editProduct(productId: number, data: ProductInput) {
    this.authHttp.put(`https://softwarefullproductcomponent.azurewebsites.net/api/Products/${productId}`, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));
    console.log(data);
  }

  deleteProduct(productId: number) {
    this.authHttp.delete(`https://softwarefullproductcomponent.azurewebsites.net/api/Products/${productId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));;
  }
}
