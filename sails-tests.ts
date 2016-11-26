import Sails = require(".");
const app1 = new Sails.constructor();
// Configs
app1.config.appPath = "test";
app1.config.port = 111;
app1.config.explicitHost = "dom";
app1.config.proxyHost = "proxy";
app1.config.proxyPort = 5555;
app1.config.environment = "dev";
app1.config.hookTimeout = 1000;
app1.config.keepResponseErrors = true;
app1.config.ssl = true;
app1.config.ssl = {
    ca: "ca",
    key: "key",
    cert: "cert",
    pfx: "pfx",
};
app1.config.bootstrap = (cb) => {
    cb();
    cb("");
};
app1.config.connections = {
    conn1: {
        adapter: "adapter",
        database: "d1",
        host: "h1",
        password: "pass",
        user: "us1",
        apiVersion: "1",
        deadTimeout: 111,
        keepAlive: true,
        maxRetries: 15,
        sniffOnConnectionFault: false,
        sniffOnStart: true,
    },
};
app1.config.blueprints = {
    actions: true,
    autoWatch: false,
    defaultLimit: 111,
    jsonp: true,
    pluralize: true,
    populate: true,
    prefix: "x",
    rest: true,
    restPrefix: "y",
    shortcuts: true,
};
app1.config.csrf = true;
app1.config.csrf = {
    grantTokenViaAjax: true,
    origin: "t",
    protectionEnabled: true,
    route: "r",
    routesDisabled: ["r"],
};
app1.config.cors = false;
app1.config.cors = <Sails.CORS>{
    allRoutes: true,
    credentials: true,
    exposeHeaders: "eh",
    headers: "h",
    methods: "get,post",
    origin: "*",
    securityLevel: 1,
};
app1.config.i18n = {
    defaultLocale: "fr",
    locales: ["en"],
    localesDirectory: "ld",
    updateFiles: true
};
app1.config.globals = true;
app1.config.globals = <Sails.GlobalsConfig>{
    _: true,
    async: true,
    models: true,
    sails: true,
    services: true,
};
app1.config.log = {
    level: "warn",
    inspect: true,
    custom: {}
};
app1.config.models = {
    attributes: {
        attr1: {
            type: "string",
        },
    },
    autoCreatedAt: true,
    autoPK: true,
    autoUpdatedAt: true,
    connection: "c",
    dynamicFinders: true,
    migrate: "alter",
    tableName: "t",
};
app1.config.policies = {};
app1.config.routes = {
    route1: "Controller.index",
    route2: <Sails.RouteBlueprint>{
        blueprint: "b",
        model: "m",
    },
    route3: <Sails.RouteControllerAction>{
        controller: "c",
        action: "a",
    },
    route4: <Sails.RouteFunction>{
        fn: (req, res) => { const x: number = req.accepted.length; },
        cors: true,
        locals: "l",
        skipAssets: true,
        skipRegex: /s/gi,
    },
    route5: <Sails.RoutePolicy>{
        policy: "p",
    },
    route6: <Sails.RouteResponse>{
        response: "404",
    },
    route7: <Sails.RouteView>{
        view: "v",
    },
    route8: <Sails.RouteWithPolicy>
    [<Sails.RouteBlueprint & Sails.RoutePolicy>{ blueprint: "b", policy: "x" }],
};
app1.config.views = {
    layout: "l",
    engine: "ejs",
    extension: "e",
    locals: {},
};
app1.config.sockets = {
    
}
/*
sockets ?: SocketsConfig;
sessions ?: SessionsConfig;*/
