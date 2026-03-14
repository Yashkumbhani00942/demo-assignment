import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  productServices = inject(ProductService)

  productData: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[] | undefined;

  ngOnInit() {
    this.productServices.getProductData();
  }

}
