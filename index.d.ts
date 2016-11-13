declare namespace Sails {
    export interface Sails {
        models: { [index: string]: Waterline.Model };
    }
    export interface Module {

    }
}
declare var sails: Sails.Sails;
declare module 'sails' {
    var sails: Sails.Module;
}