import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserComponent } from './components/admin/manage-user/manage-user.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { DeductCreditComponent } from './components/admin/deduct-credit/deduct-credit.component';
import { AddCreditComponent } from './components/admin/add-credit/add-credit.component';
import { UnauthorizeComponent } from './components/unauthorize/unauthorize.component';
import { ViewProductsComponent } from './components/user/view-products/view-products.component';
import { SearchProductsComponent } from './components/user/search-products/search-products.component';

const routes: Routes = [];

const appRoutes: Routes = [
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'add-credit',
    component: AddCreditComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'deduct-credit',
    component: DeductCreditComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['ADMIN','SUPERADMIN']}
  },
  {
    path: 'view-products',
    component: ViewProductsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['USER','ADMIN']}
  },
  {
    path: 'search-products',
    component: SearchProductsComponent,
    canActivate: [AuthGuardService],
    data: {roles: ['USER']}
  },
  {
    path: 'unauthorized',
    component: UnauthorizeComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
