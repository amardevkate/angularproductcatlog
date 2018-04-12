import { Component, OnInit } from "@angular/core";
import { IProduct, product } from "./product";
import { ProductService } from "./product.service";


@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class prouctListComponent implements OnInit {

  constructor(private _productserver: ProductService) {
  }

  ngOnInit(): void {
    this._productserver.getProducts()
      .subscribe(products => { this.products = products; this.filteredProduct = products; });
    //this.products = this._productserver.getProducts();
    this.filteredProduct = this.products;
  }
  pageTitle: string = "Product Item List";
  greating: string = "Devloped by Amar Devkate";
  getTitle(): string { return this.greating };
  imageMargin: number = 5;
  imageWidth: number = 50;
  showImage: boolean = false;
  _listFilter: string;
  filteredProduct: IProduct[];
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
