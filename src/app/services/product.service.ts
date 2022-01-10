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
    return this.authHttp.get<ProductOutput[]>('https://localhost:5021/api/Product');
    // await this.authHttp.get<ProductOutput[]>('https://localhost:44366/api/Products').subscribe((products) => {
    //   console.log(products);
    //   productList = products as ProductOutput[];
    // }, (error) => console.error(error));
  }

  getProduct(productSlug: string): Observable<ProductOutput>
  {
    return this.authHttp.get<ProductOutput>(`https://localhost:5021/api/Product/${productSlug}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    });
  }

  createProduct(data: ProductInput) {
    this.authHttp.post('https://localhost:5021/api/Product', data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));
    console.log(data);
  }

  editProduct(productId: number, data: ProductInput) {
    this.authHttp.put(`https://localhost:5021/api/Product/${productId}`, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));
    console.log(data);
  }

  deleteProduct(productId: number) {
    this.authHttp.delete(`https://localhost:5021/api/Product/${productId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.getAccessToken())
    }).subscribe((d) => console.log(d), (err) => console.log(err));;
  }
}
