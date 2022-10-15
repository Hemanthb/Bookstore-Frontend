import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { LoginComponent } from './components/login/login.component';
import { QuickViewBookComponent } from './components/quick-view-book/quick-view-book.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:DashboardComponent,
  children:[
  {path:'', redirectTo:'/home/books',pathMatch:'full'},
  {path:'books', component:GetAllBooksComponent},
  {path:'quickview',component:QuickViewBookComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
