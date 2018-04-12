import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { prouctListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule } from "@angular/router";
import { WelcomeComponent } from './home/welcome.component';


@NgModule({

  declarations: [
    AppComponent,
  prouctListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: "products", component: prouctListComponent
    },
      {path:"welcome",component:WelcomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
