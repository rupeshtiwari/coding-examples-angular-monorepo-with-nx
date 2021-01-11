import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandingNgMaterialModule } from '@myorg/branding/ng-material';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, BrandingNgMaterialModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class CustomersUsersModule {}
