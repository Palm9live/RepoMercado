import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'catalog',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./catalog/catalog.module').then(m => m.CatalogPageModule)
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'Cerrar sesion',
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      bindToComponentInputs: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }