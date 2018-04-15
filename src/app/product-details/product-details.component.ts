import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products/product.service';
import { IProduct } from '../products/product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _productserver: ProductService, private _router: Router
  ) {
    console.log(this._route.snapshot.paramMap.get("id"));
  }
  _product: IProduct;
  imageMargin: number = 15;
  imageWidth: number = 200;
    ngOnInit(): void {
    let Id = +this._route.snapshot.paramMap.get("id");
    this._productserver.getProducts()
      .subscribe(products => {
        this._product = products.find((p:IProduct)=>p.productId==Id);
      });
  }

  Onback(): void {
    this._router.navigate(['/products']);
  }

}
