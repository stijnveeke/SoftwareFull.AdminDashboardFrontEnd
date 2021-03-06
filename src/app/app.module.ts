import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { ShoppingcartContentComponent } from './components/shoppingcart-content/shoppingcart-content.component';
import {AuthService} from './services/AuthService';
import {ScopeGuardService} from './services/ScopeGuardService';
import {AuthGuardService} from './services/AuthGuardService';
import {CallbackComponent} from './components/callback/callback.component';
import { CreateProductComponent } from './components/crud/product/create-product/create-product.component';
import { ListProductComponent } from './components/crud/product/list-product/list-product.component';
import { ViewProductComponent } from './components/crud/product/view-product/view-product.component';
import { EditProductComponent } from './components/crud/product/edit-product/edit-product.component';
import {ViewLicenseComponent} from './components/crud/license/view-license/view-license.component';
import {ListLicenseComponent} from './components/crud/license/list-license/list-license.component';
import {ViewUserComponent} from './components/crud/user/view-user/view-user.component';
import {ListUserComponent} from './components/crud/user/list-user/list-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    ExternalApiComponent,
    ErrorComponent,
    AddProductFormComponent,
    FieldErrorDisplayComponent,
    ShoppingcartComponent,
    ShoppingcartContentComponent,
    CallbackComponent,
    CreateProductComponent,
    ListProductComponent,
    ViewProductComponent,
    EditProductComponent,
    ViewLicenseComponent,
    ListLicenseComponent,
    ViewUserComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HighlightModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuardService,
    ScopeGuardService,
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
