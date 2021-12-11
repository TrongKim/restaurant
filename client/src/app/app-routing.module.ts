import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/admin/dashboard/dashboard.component';
import { LoginComponent } from './view/admin/login/login.component';
import { AboutComponent } from './view/user/about/about.component';
import { BlogDetailsComponent } from './view/user/blog-details/blog-details.component';
import { BlogHomeComponent } from './view/user/blog-home/blog-home.component';
import { ContactUsComponent } from './view/user/contact-us/contact-us.component';
import { ElementsComponent } from './view/user/elements/elements.component';
import { HomeComponent } from './view/user/home/home.component';
import { MenuFoodComponent } from './view/user/menu-food/menu-food.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Blog-Home',
    component: BlogHomeComponent
  },
  { 
    path: 'Blog-DeTails',
    component: BlogDetailsComponent
  },
  { 
    path: 'Contact-Us',
    component: ContactUsComponent
  },
  {
    path: 'Elements',
    component: ElementsComponent
  },
  { 
    path: 'Dashboard/Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard/Home',
    component: DashboardComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Menu-Food',
    component: MenuFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
