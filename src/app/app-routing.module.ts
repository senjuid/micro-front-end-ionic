import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'angular13',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js',
        exposedModule: './HomeModule',
      }).then((m) => {
        return m.HomeModule;
      }),
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
