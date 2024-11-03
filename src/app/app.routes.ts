import { Routes } from '@angular/router';
import {OrderComponent, ShopsComponent} from "./modules";

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
  {
    path: 'shop',
    component: ShopsComponent,

  },
  // {
  //   path: 'visitor-create',
  //   component: VisitorCreateComponent,
  // },
];
