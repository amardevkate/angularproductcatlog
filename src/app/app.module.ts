import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     ProductModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
