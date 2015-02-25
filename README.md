fluxury - latest
================

[Project Home Page](http://jim-y.me/fluxury/)

Version 2.1.0 no longer use Grunt for the build process nor Backbone for data modelling. Instead, it uses npm as a build tool, and ImmutableJS for state
management. Also I used `babelify` `browserify` transform for JSX and ES6 compilation. This means, that you can use a bunch of ES6 features in your project
and the babelify transform will transpile it to ES5 upon bundling.

The template contains an implementation of Dartlang's [Avast, Ye Pirates](https://www.dartlang.org/codelabs/darrrt/) written in flux.

![piratebadge](https://raw.githubusercontent.com/jim-y/fluxury/master/assets/images/piratebadge.png)

## Legacy code

If someone is interested on the initial application with `Grunt` and `Backbone` one should check out the tag **v0.2**.

## Design choices

About the technologies used in the skeleton application, read more on the project's home page -> [here](http://jim-y.me/fluxury/)

## Dependencies

```bash
.
├── babelify
├── browserify
├── flux
├── immutable
├── jsxhint
├── react
├── react-router
├── uglify
└── watchify
```

## Usage

* clone
* npm run init
* mkdir build
* npm start # this runs the linter and creates the bundle
* npm run watch # this watches for changes and creates the bundle on FS change

## Changelog

- v2.2.0: Changed CommonJS requires/exports to ES6 syntax.
- v2.1.0: reactify -> babelify for ES6 to ES5 compilation
- v2.0.0: Get rid of grunt and backbone. Using npm for the build and ImmutableJS for state mngmt
- v1.0.0: Used grunt for the build and backbone for data modelling

## TBD

- SASS/LESS
- build process revise
- etc :)
