import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import {ScopeGuardService} from './services/ScopeGuardService';
import {CallbackComponent} from './components/callback/callback.component';
import { AuthGuardService } from './services/AuthGuardService';
import { CreateProductComponent } from './components/crud/product/create-product/create-product.component';
import { ListProductComponent } from './components/crud/product/list-product/list-product.component';
import { ViewProductComponent } from './components/crud/product/view-product/view-product.component';
import {EditProductComponent} from './components/crud/product/edit-product/edit-product.component';
import {ListLicenseComponent} from "./components/crud/license/list-license/list-license.component";
import {ViewUserComponent} from "./components/crud/user/view-user/view-user.component";
import {ListUserComponent} from "./components/crud/user/list-user/list-user.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService, ScopeGuardService],
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'products',
    component: ListProductComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'licenses',
    component: ListLicenseComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'licenses/:licenseId',
    component: ListLicenseComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'users',
    component: ListUserComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'users/:userId',
    component: ViewUserComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'products/create',
    component: CreateProductComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'products/edit/:productSlug',
    component: EditProductComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'products/:productId',
    component: ViewProductComponent,
    canActivate: [AuthGuardService, ScopeGuardService]
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuardService, ScopeGuardService],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
