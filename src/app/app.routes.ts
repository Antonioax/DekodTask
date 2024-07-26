import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from "./components/form/form.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'New Employee',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'HOME',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: '404',
  },
];
