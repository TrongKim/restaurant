import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/user/home/home.component';
import { FooterComponent } from './view/user/layout/footer/footer.component';
import { BookingComponent } from './view/user/layout/booking/booking.component';
import { MenuComponent } from './view/user/layout/menu/menu.component';
import { MenuFoodComponent } from './view/user/menu-food/menu-food.component';
import { ElementsComponent } from './view/user/elements/elements.component';
import { ContactUsComponent } from './view/user/contact-us/contact-us.component';
import { BlogHomeComponent } from './view/user/blog-home/blog-home.component';
import { BlogDetailsComponent } from './view/user/blog-details/blog-details.component';
import { AboutComponent } from './view/user/about/about.component';
import { DashboardComponent } from './view/admin/dashboard/dashboard.component';
import { TopMenuComponent } from './view/admin/layout/top-menu/top-menu.component';
import { FooterDashboardComponent } from './view/admin/layout/footer-dashboard/footer-dashboard.component';
import { SidebarComponent } from './view/admin/layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './view/admin/login/login.component';
import { LoginEffect } from './Store/effects/login.effect';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './Store/reducers/login.reducer';
import { StoreModule } from '@ngrx/store';
import { LoginService } from './Store/services/login.service';
import { registerReducer } from './Store/reducers/register.reducer';
import { RegisterEffect } from './Store/effects/register.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BookingComponent,
    MenuComponent,
    MenuFoodComponent,
    ElementsComponent,
    ContactUsComponent,
    BlogHomeComponent,
    BlogDetailsComponent,
    AboutComponent,
    DashboardComponent,
    TopMenuComponent,
    FooterDashboardComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    StoreModule.forRoot({
      dataLogin: loginReducer,
      dataRegister: registerReducer,
      //use to take data from todoReducer
    }),
    EffectsModule.forRoot([LoginEffect, RegisterEffect]), // use to get data from server and put it to store
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
