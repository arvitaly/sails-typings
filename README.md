# sails-typings

Typings for [Sails.js](http://sailsjs.org/). Used like external module.

# Install

    npm install sails-typings waterline-typings --save
    typings install express mime serve-static express-serve-static-core socket.io node bluebird --save --global
    typings install waterline=npm:waterline-typings/index.d.ts sails=npm:sails-typings/index.d.ts --save

# Usage

    import {Model} from "sails";
    const model: Model;

# Tests

    Only tslint and tsc checking now

    npm install
    npm test