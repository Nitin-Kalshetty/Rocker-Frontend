import { Routes } from '@angular/router';
import {Register} from './features/user/pages/register/register';
import {Update} from './features/user/pages/update/update';
import {List} from './features/user/pages/list/list';
import {Details} from './features/user/pages/details/details';
import {Login} from './features/user/pages/login/login';

export const routes: Routes = [
  {
    path: 'user',
    children: [
      {path: 'register', component: Register},
      {path: 'list', component: List},
      {path: 'details/:id', component: Details},
      {path: 'update/:id', component: Update},
      {path: 'login', component: Login}
    ]
  }
];
