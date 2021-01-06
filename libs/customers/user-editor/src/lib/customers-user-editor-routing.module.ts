import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdduserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersUserEditorRoutingModule {}
