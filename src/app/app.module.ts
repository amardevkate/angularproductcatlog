import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { prouctListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGuardService } from './products/product-guard.service';
import { ProductService } from './products/product.service';


@NgModule({

  declarations: [
    AppComponent,
    prouctListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "products", component: prouctListComponent },
      { path: "products/:id", canActivate: [ProductGuardService], component: ProductDetailsComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [ProductGuardService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
