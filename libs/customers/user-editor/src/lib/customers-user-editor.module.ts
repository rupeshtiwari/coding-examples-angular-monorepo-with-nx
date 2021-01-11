import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandingNgMaterialModule } from '@myorg/branding/ng-material';
import { RouterModule } from '@angular/router';
import { CustomersUserEditorRoutingModule } from './customers-user-editor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandingNgMaterialModule,
    CustomersUserEditorRoutingModule,
  ],
  declarations: [AdduserComponent],
  exports: [AdduserComponent],
})
export class CustomersUserEditorModule {}
