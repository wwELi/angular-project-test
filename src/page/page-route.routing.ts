import { Http01Component } from './http01/http01.component';
import { Rxjs01Component } from './rxjs01/rxjs01.component';
import { Test03Component } from './test03/test03.component';
import { Test02Component } from './test02/test02.component';
import { Test01Component } from './test01/test01.component';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { 
        path: 'test01',
        component: Test01Component
       },
      { 
        path: 'test02',
        component: Test02Component
       },
      { 
        path: 'test03/:id',
        component: Test03Component
       },
      { 
        path: 'rxjs01',
        component: Rxjs01Component
       },
      { 
        path: 'http01',
        component: Http01Component
       },

    ]
  },
  
];

export const PageRouteRoutes = RouterModule.forChild(routes);
