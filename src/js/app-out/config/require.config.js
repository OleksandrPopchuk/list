require.config({
    baseUrl:"./js/app",
    paths:{
        "jquery":"../libs/jquery.min",
        "underscore":"../libs/underscore.min",
        "backbone":"../libs/backbone.min",
        "handlebars":"../libs/handlebars",
        "handlebars.runtime":"../libs/handlebars.runtime",
        "template.collection": "templates/template.collection"
    },

    shim:{
        "backbone":{
            "deps":["underscore", "jquery"],
            "exports":"Backbone"
        }
    }
});