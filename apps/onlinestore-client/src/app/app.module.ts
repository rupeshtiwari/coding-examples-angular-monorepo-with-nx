import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomersUsersModule } from '@myorg/customers-users';
import { SalesProductsModule } from '@myorg/sales-products';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

@NgModule({
  declarations: [AppComponent, ProductListPageComponent, UserListPageComponent],
  imports: [
    BrowserModule,
    SalesProductsModule,
    CustomersUsersModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/products', pathMatch: 'full' },

        {
          path: 'products',
          component: ProductListPageComponent,
        },
        {
          path: 'users',
          component: UserListPageComponent,
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
