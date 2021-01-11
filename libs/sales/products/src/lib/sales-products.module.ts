import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

// sales project can depend on branding's logger project
import {BrandingLoggerModule} from '@myorg/branding/logger';



@NgModule({
  imports: [CommonModule,BrandingLoggerModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class SalesProductsModule {}
