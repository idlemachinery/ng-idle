# @ng-idle

[![GitHub version](https://badge.fury.io/gh/idlemachinery%2Fng-idle.svg)](https://badge.fury.io/gh/idlemachinery%2Fng-idle)

Custom libraries that provided extended functionality to [Angular](https://angular.io). I have included some common code that I have gathered throughout the [Pluralsight](https://app.pluralsight.com/paths/skill/angular) Angular skill learning path. It is still in pre-release as I have some cleanup and documentation to do.  My final goal is to release the libraries on [npm](https://npmjs.com).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Features

* Capitalize and Trim pipes
* Autofocus directive
* EnsureModuleLoadedOnceGuard for core & other modules
* FormValidators including range and restrictedWords
* GenericValidator class for Reactive Forms
* ValidationForm that implements GenericValidator and can be extended
* Tester application with examples

## Outstanding items

* @ng-idle/http library
* Code comments & documentation
* Unit tests for all features

## Possible future enhancements

* Directives for the validation functions so they can be used in template-driven forms
* Http Interceptors for logging, caching & adding content headers
* Extensible logging service

## Running the example application

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the application source files.

## Running unit tests

Run `ng test` or `ng test common` or `ng test forms` or `ng test http` to execute the unit tests via [Karma](https://karma-runner.github.io).