import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { ChartsComponent } from './components/site/charts/charts.component';
import { FormsComponent } from './components/site/forms/forms.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import { TablesComponent } from './components/site/tables/tables.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { EmployeesComponent } from './components/site/employees/employees.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'home', component: HomeComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'charts', component : ChartsComponent},
  { path: 'forms', component : FormsComponent},
  { path: 'tables', component : TablesComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
    HomeComponent,
    ChartsComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    TablesComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
