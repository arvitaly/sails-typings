declare namespace Sails {
    export interface Sails {
        models: { [index: string]: Sails.Model };
        lower?(cb?: (err) => any);
    }
    export interface Connection {
        adapter?: string;
    }
    export interface AppConfig {
        log?: {
            level?: 'warn'
        }
        models?: {
            migrate?: "alter" | "safe" | "drop",
            connection?: string;
        }
        connections?: {
            [index: string]: Connection;
        }
        appPath?: string
    }
    export interface App {
        lift(config: AppConfig, cb: (err, sails: Sails) => any);
        lift(cb: (err, sails: Sails) => any);
        load(config: AppConfig, cb: (err, sails: Sails) => any);
        load(cb: (err, sails: Sails) => any);
        lower(cb?: (err) => any);
        on(event: string, cb?: () => any): App;
        models: { [index: string]: Sails.Model };
        config: {
            [index: string]: any;
            routes: any;
        };
    }
    export interface Model extends Waterline.Collection {
        globalId: string;
    }
    export interface Module {
        constructor: new () => App;
    }
}
declare var sails: Sails.Sails;
declare var sailsModule: Sails.Module;
declare module 'sails' {
    export = sailsModule
}