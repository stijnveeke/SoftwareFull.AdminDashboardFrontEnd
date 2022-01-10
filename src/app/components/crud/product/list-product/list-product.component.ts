import { Component, OnInit } from '@angular/core';
import { ProductOutput } from 'src/app/dto/productOutput';
import { ProductService } from 'src/app/services/product.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Observable<ProductOutput[]>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(e: Event, productId: number)
  {
    e.preventDefault();
    e.stopPropagation();
    this.productService.deleteProduct(productId);
    location.reload();
  }
}
