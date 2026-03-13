import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { PageLayout } from './pages/page-layout/page-layout';

export const routes: Routes = [

    { path:'', redirectTo: '/login', pathMatch: 'full' },
    { path:'login', component: Login },
    { path:'Dashboard', component: PageLayout, 
        children:[
            { path:'', component: Home},
            { path:'home', component: Home },
            { path:'product', component: Products },
        ]
    },
    { path:'**', component: PageNotFound }
];
