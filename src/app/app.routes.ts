import { Routes } from '@angular/router';
import {OrderComponent} from "./modules";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full'
  },
  {
    path: 'order',
    component: OrderComponent,

  },
  // {
  //   path: 'visitor-create',
  //   component: VisitorCreateComponent,
  // },
];
