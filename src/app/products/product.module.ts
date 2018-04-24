import { NgModule } from '@angular/core';
import { prouctListComponent } from './product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products", component: prouctListComponent },
      { path: "products/:id", canActivate: [ProductGuardService], component: ProductDetailsComponent }
    ]),
    SharedModule

  ],
  declarations: [
    prouctListComponent,
    ProductDetailsComponent
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
