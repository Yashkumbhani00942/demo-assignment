import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  
  productServices = inject(ProductService);
  productArr: any;
  cd = inject(ChangeDetectorRef);

  productData:
    | {
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
      }[]
    | undefined;

  ngOnInit(): void {
    this.productServices.getProductData().subscribe((res: any) => {
      this.productArr = res;
      this.cd.markForCheck();
    });
  }


  deleteProduct(pID: any) {
    this.productServices.deleteProductData(pID).subscribe((res: any) => {

      this.productServices.getProductData().subscribe((res: any) => {
        this.productArr = res;
        this.cd.markForCheck();
      });

    });
  }
}
