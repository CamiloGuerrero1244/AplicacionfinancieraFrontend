import { Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CategoryComponent } from './components/category/category.component';
import { LiabilityComponent } from './components/liability/liability.component';
import { AssetsComponent } from './components/assets/assets.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './components/transaction-create/transaction-create.component';
import { LiabilityListComponent } from './components/liability-list/liability-list.component';
import { LiabilityCreateComponent } from './components/liability-create/liability-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { AssetsCreateComponent } from './components/assets-create/assets-create.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsCreateComponent } from './components/accounts-create/accounts-create.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,
    children:[
      {path: 'transaction', component:TransactionComponent,children:[
        {path:'list',component:TransactionListComponent},
        {path:'create',component:TransactionCreateComponent}]},
      {path:'category',component:CategoryComponent,children:[
        {path:'list',component:CategoryListComponent},
        {path:'create',component:CategoryCreateComponent}]},
      {path:'liability',component:LiabilityComponent,children:[
        {path:'list',component:LiabilityListComponent},
        {path:'create',component:LiabilityCreateComponent}]},
      {path:'assets',component:AssetsComponent,children:[
        {path:'list',component:AssetsListComponent},
        {path:'create',component:AssetsCreateComponent}]},
      {path:'accounts',component:AccountsComponent,children:[
        {path:'list',component:AccountsListComponent},
        {path:'create',component:AccountsCreateComponent}]},
      
    ] },
];

export const appRoutingProviders: any[] = [];

export const routing = provideRouter(routes);