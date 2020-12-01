import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SalesProductsModule } from '@myorg/sales-products';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

@NgModule({
  declarations: [AppComponent, ProductListPageComponent],
  imports: [
    BrowserModule,
    SalesProductsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/products', pathMatch: 'full' },

        {
          path: 'products',
          component: ProductListPageComponent,
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
