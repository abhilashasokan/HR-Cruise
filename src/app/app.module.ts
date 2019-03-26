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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';


import { RouterModule, Routes } from '@angular/router';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { EmployeesComponent } from './components/site/employees/employees.component';
import { ManageComponent } from './components/site/employees/manage/manage.component';
import { BreadcrumbsComponent } from './components/layout/breadcrumbs/breadcrumbs.component';
import { SalutationComponent } from './components/site/partial/salutation/salutation.component';
import { DesignationComponent } from './components/site/partial/designation/designation.component';
import { StateComponent } from './components/site/partial/state/state.component';
import { CountriesComponent } from './components/site/partial/countries/countries.component';

import { EmployeesService } from './services/employees.service';
import { ApiInterceptor } from './services/api.interceptor';
import { ListActionsComponent } from './components/site/employees/list-actions/list-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/manage', component: ManageComponent },
  { path: 'employees/manage:id?', component: ManageComponent },
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
    EmployeesComponent,
    ManageComponent,
    BreadcrumbsComponent,
    ListActionsComponent,
    SalutationComponent,
    DesignationComponent,
    StateComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([ListActionsComponent])
  ],
  providers: [
    EmployeesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
