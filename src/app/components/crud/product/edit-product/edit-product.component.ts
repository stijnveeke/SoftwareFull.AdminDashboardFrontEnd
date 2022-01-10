import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { ProductService } from 'src/app/services/product.service';
import {ProductInput} from 'src/app/dto/product-input';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductOutput} from '../../../../dto/productOutput';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productEditForm = this.fb.group({
    productName: ['', Validators.required],
    productSlug: [''],
    description: ['', Validators.required],
    price: ['', Validators.required]
  });

  public productSlug: string;
  public product: Observable<ProductOutput>;
  private currentSlug: string;
  private productId: number;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router,  private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    this.currentSlug = String(routeParams.get('productSlug'));

    this.product = this.productService.getProduct(this.currentSlug);
    this.product.subscribe(
      (data) => {
        this.productId = data.id;
        this.productEditForm.setValue({
          productName: data.productName,
          productSlug: data.productSlug,
          description: data.description,
          price: data.price
        });
      }
    );
  }

  onSubmit(){
    console.warn(this.productEditForm.value);
    if (this.productEditForm.valid) {
      console.log(this.productEditForm.value);
      try {
        const productInput = this.productEditForm.value as ProductInput;
        productInput.id = this.productId;
        this.productService.editProduct(this.productId, productInput);
        this.router.navigate(['/products']);
        alert('<span class="alert alert-danger">Success: product was created!</span>');
      }catch (e) {
        alert('ERROR: Bad request');
      }
    }
  }

  onTitleChange(e: KeyboardEvent) {
    const productname = ((document.getElementById('productname') as HTMLInputElement).value as string);
    this.productSlug = encodeURIComponent(productname.trim().replace(/\s+/g, '-').toLowerCase());
    this.productEditForm.patchValue({ productSlug: this.productSlug});
  }

}
