import { RouterModule, Routes } from '@angular/router';

/*
*user
*/

import {UserComponent} from './user/user.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';

/*
*admin
*/

import {AdminComponent} from './admin/admin.component';
import {SupplyComponent} from './admin/supply/supply.component';
import {SaleComponent} from './admin/sale/sale.component';
import {StorageComponent} from './admin/storage/storage.component';

/*
*routes
*/

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children:[
      {
        path:'register',
        component:UserRegisterComponent
      },
      {
        path:'login',
        component:UserLoginComponent
      },
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path:'supply',
        component:SupplyComponent
      },
      {
        path:'sale',
        component:SaleComponent
      },
      {
        path:'storage',
        component:StorageComponent
      },
      {
        path:'',
        redirectTo:'admin/supply',
        pathMatch:'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'admin/supply',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
