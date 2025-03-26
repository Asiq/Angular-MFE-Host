import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
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
];
