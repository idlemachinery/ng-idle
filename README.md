# ng-idle

[![GitHub version](https://badge.fury.io/gh/idlemachinery%2Fng-idle.svg)](https://badge.fury.io/gh/idlemachinery%2Fng-idle) ![](https://img.shields.io/twitter/follow/idlemachinery.svg?label=Follow&style=social)

Custom libraries that provided extended functionality to [Angular](https://angular.io). I have included some common code that I have gathered throughout the [Pluralsight](https://app.pluralsight.com/paths/skill/angular) Angular skill learning path.

The main application contains examples and is on [StackBlitz](https://stackblitz.com/github/idlemachinery/ng-idle). Click 'Install Missing Packages' and 'Install Missing Dependencies' to get it running.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Libraries

### ng-idle-common

![](https://img.shields.io/npm/v/ng-idle-common.svg?style=flat) [npmjs](https://www.npmjs.com/package/ng-idle-common)

Commonly needed directives and services

* Capitalize and Trim pipes
* EnsureModuleLoadedOnceGuard for core & other modules

### ng-idle-forms

![](https://img.shields.io/npm/v/ng-idle-forms.svg?style=flat) [npmjs](https://www.npmjs.com/package/ng-idle-forms)

Directives and services for creating forms

* Autofocus directive
* FormValidators including range and restrictedWords
* GenericValidator class for Reactive Forms
* ValidationForm that implements GenericValidator and can be extended
* IdleFormsModule & IdleReactiveFormsModule export FormModule & ReactiveFormsModule respectively

### ng-idle-http

![](https://img.shields.io/npm/v/ng-idle-http.svg?style=flat) [npmjs](https://www.npmjs.com/package/ng-idle-http)

The http service

* AddHeaderInterceptor & AddXmlHeaderInterceptor for adding application Content-Type to the headers of http calls
* GenericDataService is an abstract class that provides get/post/put/delete functionality for generic types

## Outstanding items

* Code comments & documentation
* Unit tests for all features

## Possible future enhancements

* Directives for the validation functions so they can be used in template-driven forms
* Http Interceptors for logging & caching
* Extensible logging service

## Running the example application

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the application source files.

## Running unit tests

Run `ng test` or `ng test ng-idle-common` or `ng test ng-idle-forms` or `ng test ng-idle-http` to execute the unit tests via [Karma](https://karma-runner.github.io).