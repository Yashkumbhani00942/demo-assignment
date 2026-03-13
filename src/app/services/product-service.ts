import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productDetails: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log(" Product services connected");
  }

  addProductData(productData: any) {
    return this.http.post(this.productDetails, productData)
  }

  getProductData() {
    return this.http.get<any>(this.productDetails).subscribe((response) => {
      console.log(response);
    });
  }

}
