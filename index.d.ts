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
        appPath?: string,
        port?: number;
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
    export interface Request {

    }
    export type Id = string | number;
    export interface Model extends Waterline.Collection {
        globalId: string;
        // WebSockets Resourceful PubSub http://sailsjs.org/documentation/reference/web-sockets/resourceful-pub-sub  
        message(id: Id, data: any, req?: Request): Model;
        publishAdd(id: Id, association: string, added: any, req?: Request, options?: { noReverse: boolean }): Model;
        publishCreate(data: any, req?: Request): Model;
        publishRemove(id: Id, association: string, fk: string, req?: Request, options?: { noReverse: boolean }): Model;
        publishDestroy(id: Id, req?: Request, options?: { previous: any }): Model;
        publishUpdate(id: Id, changes: any, req?: Request, options?: { noReverse: boolean }): Model;
        unsubscribe(req: Request, ids: Array<Id>): Model;
        watch(req: Request): Model;
        subscribe(req: Request, ids: Array<Id>): Model;
        unwatch(req: Request): Model;
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