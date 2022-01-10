import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { ProductService } from 'src/app/services/product.service';
import {ProductInput} from 'src/app/dto/product-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productCreateForm = this.fb.group({
    productName: ['', Validators.required],
    productSlug: [''],
    description: ['', Validators.required],
    price: ['', Validators.required]
  });

  public productSlug: string;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.productCreateForm.value);
    if (this.productCreateForm.valid) {
      console.log(this.productCreateForm.value);
      try {
        this.productService.createProduct(this.productCreateForm.value as ProductInput);
        this.router.navigate(['/products']);
        alert("<span class=\"alert alert-danger\">Success: product was created!</span>")
      }catch(e) {
        alert("ERROR: Bad request")
      }
    }
  }

  onTitleChange(e: KeyboardEvent) {
    let productname = ((document.getElementById("productname") as HTMLInputElement).value as string);
    this.productSlug = encodeURIComponent(productname.trim().replace(/\s+/g, '-').toLowerCase());
    this.productCreateForm.patchValue({ productSlug: this.productSlug});
  }

}
