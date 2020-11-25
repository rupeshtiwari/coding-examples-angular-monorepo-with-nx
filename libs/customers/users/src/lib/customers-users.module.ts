import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {SalesProductEditorModule} from '@myorg/sales-product-editor'

@NgModule({
  imports: [CommonModule],
})
export class CustomersUsersModule {
  x = new SalesProductEditorModule();
}
