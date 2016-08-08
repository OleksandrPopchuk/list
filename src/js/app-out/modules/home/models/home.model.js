/**
 * Created by oleksandrpop on 6/15/2016.
 */
define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        HomeModel;

    HomeModel = Backbone.Model.extend({

        defaults: {
            defaultUrl: 'http://vk.com'
        },

        url: function(){
            return this.defaults.defaultUrl;
        },

        parse: function(response){

        }

    });

    return new HomeModel();
});