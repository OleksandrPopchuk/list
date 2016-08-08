/**
 * Created by oleksandrpop on 6/14/2016.
 */
define(function(require){
   var Backbone = require('backbone'),
       Router = require('app.router');

    var App = function(){};

    App.prototype.start = function(){
        this.router = new Router();
        Backbone.history.start({
           pushState: false
        });
    };

    return new App();
});