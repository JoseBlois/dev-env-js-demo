//This isnt something that gets transpiled so we must use CommonJS and ES5

//Register babel to transpile before our test run.
require('babel-register');

//Disable webpack features that Mocha doesnt understands
require.extensions['.css'] = function(){};