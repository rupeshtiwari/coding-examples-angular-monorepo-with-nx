import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrandingNgMaterialModule } from '@myorg/branding/ng-material';
import { AppComponent } from './app.component';
import { BrandingLoggerModule } from '@myorg/branding/logger';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrandingNgMaterialModule,
    BrandingLoggerModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/adduser', pathMatch: 'full' },
        {
          path: 'adduser',
          pathMatch: 'full',
          loadChildren: () =>
            import('@myorg/customers-user-editor').then(
              (module) => module.CustomersUserEditorModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
