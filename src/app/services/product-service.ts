import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productDetails: string = 'http://localhost:3000/productDetails';

  constructor(private http: HttpClient) {
    
  }

  addProductData(productData: any) {
    return this.http.post(this.productDetails, productData);
  }

  getProductData() {
    return this.http.get(this.productDetails);
  }

  deleteProductData(produtID: any) {
    return this.http.delete(this.productDetails + '/' + produtID);
  }

  updateProductData(productID: any, data: any) {
    return this.http.put(this.productDetails + '/' + productID, data);
  }
}
