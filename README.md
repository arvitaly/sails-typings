# sails-typings

Typings for [Sails.js](http://sailsjs.org/). Used like external module.

# Install

    npm install sails-typings --save
    typings install sails=npm:sails-typings/index.d.ts --save

# Usage

    import {Model} from "sails";
    const model: Model;

# Tests

    Only tslint and tsc checking now