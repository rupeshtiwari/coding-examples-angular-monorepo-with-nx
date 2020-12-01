import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SalesProductsModule } from '@myorg/sales-products';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

@NgModule({
  declarations: [AppComponent, ProductListPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
          path: 'products',
          component: ProductListPageComponent
      },
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [SalesProductsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
