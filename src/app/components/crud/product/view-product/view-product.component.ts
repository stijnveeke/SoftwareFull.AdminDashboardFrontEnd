import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductOutput } from 'src/app/dto/productOutput';
import { ProductService } from 'src/app/services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private productService: ProductService,  private route: ActivatedRoute) { }


  product: Observable<ProductOutput>;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));

    this.product = this.productService.getProduct(productIdFromRoute);
    console.log(this.product);
  }

}
