# MicrofrontendHost

## Webpack Module Federation used in this Repo to run as Host Application.

By Using ModuleFederation Plugin to configure the microfrontend remote application which should be called as on demand in the browser as lazy -loaded.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

Step 1: Create the Host Application (Dashboard Shell App)
ng new microfrontend_host --routing

Step 2 :
cd microfrontend_host
ng add @angular-architects/module-federation

Step 3: Configure the Host
Modify webpack.config.js in the microfrontend_host:

module.exports = withModuleFederationPlugin({
remotes: {
remoteApp: "remoteApp@http://localhost:4201/remoteEntry.js",
},
shared: {
...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
},
});

Step 4: Modify the Host Application to Use Lazy Loading
Update app.routes.ts in microfrontend_host
Create a routing configuration that dynamically loads the remote component.

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

Step 5 : Run the Application

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
