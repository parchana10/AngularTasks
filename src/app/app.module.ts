import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartupService } from './service/startup.service';
import { HttpModule } from '@angular/http';
import { UnauthorizeComponent } from './components/unauthorize/unauthorize.component';
import { SharedService } from './service/sharedService';
import { LeftNavigationComponent } from './components/leftNavigation/leftNavigation.component';
import { AddCreditComponent } from './components/admin/add-credit/add-credit.component';
import { DeductCreditComponent } from './components/admin/deduct-credit/deduct-credit.component';
import { ManageUserComponent } from './components/admin/manage-user/manage-user.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { PermissionDirective } from './directives/permission.directive';
import { ViewProductsComponent } from './components/user/view-products/view-products.component';
import { SearchProductsComponent } from './components/user/search-products/search-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UnauthorizeComponent,
    LeftNavigationComponent,
    AddCreditComponent,
    DeductCreditComponent,
    ManageUserComponent,
    PermissionDirective,
    ViewProductsComponent,
    SearchProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StartupService, SharedService, AuthGuardService, AuthService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      // Call load of StartupService service which will call API to get user role and permission
      useFactory: (ss: StartupService) => function () { return ss.load() },
      deps: [StartupService, SharedService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
