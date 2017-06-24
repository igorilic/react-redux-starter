
# Redux simple starter app

[![Build Status](https://travis-ci.org/igorilic/react-redux-starter.svg?branch=master)](https://travis-ci.org/igorilic/react-redux-starter)

This is a simple starter app for developing applications
in React with Redux. If you are not familiar with Redux,
you should check documentation or watch Dan Abramov introductory
video on *egghead.io*: [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux).
You should consider CI setup with Travis or similar service.
Dev server and npm commands is created by [Cory House](https://github.com/coryhouse/).

## Prerequisities

You should have installed node version 5+ along with npm 3+.

Recomended setup includes chrome browser with Redux Dev Tools
chrome extension. Also, if you want to quick share your build 
please setup your [surge](http://surge.sh/) account.

## Install
```
> git clone https://github.com/igorilic/react-redux-starter.git
> cd react-redux-starter
> npm i
> npm start
```

## Usage

The following npm commands can be used from the start:

- `npm start` - starts the dev server with HMR, along with linting and testing all your tests
- `npm test` - run the tests
- `npm test:watch` - test watcher
- `npm run build` - builds the app and put contents in the `dest` directory
- `npm deploy` - deploys build to the *surge*
