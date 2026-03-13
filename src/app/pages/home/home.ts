import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private productService:ProductService) {

  }

  addProductForm = new FormGroup({
    productTitle: new FormControl(''),
    productDescription: new FormControl(''),
    productPrice: new FormControl(''),
    discountPercentage: new FormControl(''),
    productRating: new FormControl(''),
    productStocks: new FormControl(''),
    brandName: new FormControl(''),
    productCategories: new FormControl(''),
    productThumbnail: new FormControl(''),
    productImages: new FormControl('')
  })

  addProductDetails() {
    console.log(this.addProductForm.value);
    
  }
  
  clearFormData() {
    // this.addProductForm.reset()
    
    this.addProductForm.removeControl
    console.log(this.addProductForm.removeControl);
  }

}
