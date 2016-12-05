require.config({
    baseUrl:"./js/app",
    paths:{
        "jquery":"../libs/jquery.min",
        "underscore":"../libs/underscore.min",
        "backbone":"../libs/backbone.min",
        "handlebars":"../libs/handlebars",
        "handlebars.runtime":"../libs/handlebars.runtime",
        "template.collection": "templates/template.collection",
        "jasmine": "../libs/jasmine/lib/jasmine-2.5.2/jasmine.js",
        "jasmine-html": "../libs/jasmine/lib/jasmine-2.5.2/jasmine-html.js"
    },

    shim:{
        "backbone":{
            "deps":["underscore", "jquery"],
            "exports":"Backbone"
        },
        "jasmine-html": {
            deps : ['jasmine']
        },
        "jasmine-boot": {
            deps : ['jasmine', 'jasmine-html']
        }
    }
});