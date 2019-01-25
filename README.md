# RBACPOC

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
# API call while bootstrap the Application
API's used in the app
User : http://www.mocky.io/v2/5c4983763200000d310b588f
API Response:
{
    "role": "USER",
	"permissions": [
		"VIEW PRODUCTS",
		"SEARCH PRODUCTS"
	]
}
Admin:  http://www.mocky.io/v2/5c497f5e3200004b000b5879
API Response:
{
    "role": "ADMIN",
	"permissions": [
		"MANAGE_USER",
		"ADD_CREDIT",
		"DEDUCT_CREDIT"
	]
}
# PermissionDirective: 
Use hasPermission directive to show /hide any UI element as per role
Example: <p hasPermission="ADMIN"></p>

#canActivate:
Add canActivate: [AuthGuardService] and data: {roles: ['ADMIN']} to the route which needs to be as per Role.

# Shared service(sharedService.js) used to to share the user details(role and permissions)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# AngularTasks
