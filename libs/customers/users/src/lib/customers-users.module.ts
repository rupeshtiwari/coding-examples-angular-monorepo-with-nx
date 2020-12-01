import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedNgMaterialModule } from '@myorg/shared/ng-material';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, SharedNgMaterialModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class CustomersUsersModule {}
