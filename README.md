# Fluxury
### a React-Flux skeleton application with heavy ES6 support and immutability

[Project's Home Page](http://jim-y.me/fluxury/)

Version `3.1.0` tries to be as up to date to current *trends* as it can. To emphasize this, we use `npm` as a build tool, `ImmutableJS` for state management
and `React` with ES6 classes to create our components.

Other useful tools are hooked into the project to help you get started with your own application. To name name some, LESS, Babelify, JSXHint.
For a throughout list please read the project's homepage.

The template contains an implementation of Dartlang's [Avast, Ye Pirates](https://www.dartlang.org/codelabs/darrrt/) example written in `Flux`.

![piratebadge](https://raw.githubusercontent.com/jim-y/fluxury/master/assets/images/piratebadge.png)

## Legacy code

If someone is interested on the initial application with `Grunt` and `Backbone` one should check out the tag **v0.2**.

Version 2.1.0 no longer use `Grunt` for the build process nor `Backbone` for data modelling. Instead, it uses `npm` as a build tool, and `ImmutableJS` for state
management. Also I used `babelify` which is a `browserify` transform for JSX and ES6 compilation. This means, that you can use a bunch of ES6 features in your project
and the babelify transform will transpile it to ES5 upon bundling. After version 3.0.0 we are using `less` as a css preprocessor.

## Design choices

About the technologies used in the skeleton application, read more on the project's home page -> [here](http://jim-y.me/fluxury/)

## Dependencies

```bash
node_modules/
├── babelify
├── browserify
├── browser-sync
├── flux
├── immutable
├── jsxhint
├── less
├── react
├── react-router
├── uglify
├── watch
└── watchify
```

## Usage

1. `clone`
2. `npm run init`
3. `mkdir build`
4. `npm start`
5. (optional, see below) `npm run init:browsersync`

**Additional information**: Make sure not to type (2) to `npm init`. This command (2) will install the dependencies needed for this project.
By the time of this update we need react `v0.13.0` but `react-router` doesn't support this version yet and you will most probably
get an error message upon (2). Anyways, your deps should be fetched correctly. (5) To install `browser-sync` one must install as admin, requires
root privileges.

## Changelog

- v3.1.0: Replaced React.createClass w/ ES6 Classes
- v3.0.0: Added LESS support and rewritten the build scripts in package.json
- v2.2.0: Changed CommonJS requires/exports to ES6 syntax.
- v2.1.0: reactify -> babelify for ES6 to ES5 compilation
- v2.0.0: Get rid of grunt and backbone. Using npm for the build and ImmutableJS for state mngmt
- v1.0.0: Used grunt for the build and backbone for data modelling

## TBD

- writing tests for the stores w/ `jest`
- refactor the Readme
- update the project's homepage
