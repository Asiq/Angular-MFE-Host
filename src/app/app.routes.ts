import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './AppComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err) => console.log(err)),
  },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './LoginComponent',
      })
        .then((m) => m.LoginComponent)
        .catch((err) => console.log(err)),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './UserAnalyticsComponent',
      })
        .then((m) => m.UserAnalyticsComponent)
        .catch((err) => console.log(err)),
  },
  //   {
  //     path: 'login',
  //     loadComponent: () =>
  //       import('microfrontend_remote/Login').then((m) => m.Login),
  //   },
];
