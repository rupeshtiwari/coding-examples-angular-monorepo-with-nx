import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedNgMaterialModule } from '@myorg/shared/ng-material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule,SharedNgMaterialModule,   RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: AdduserComponent
    }
  ])],
  declarations: [AdduserComponent],
  exports:[AdduserComponent]
})
export class CustomersUserEditorModule {}
