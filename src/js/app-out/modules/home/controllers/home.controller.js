/**
 * Created by oleksandrpop on 6/15/2016.
 */
define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        HomeModel = require('modules/home/models/home.model'),
        HomeView = require('modules/home/views/home.view'),
        HomeControler;

    HomeControler = Backbone.View.extend({
        initialize: function(){

        },

        start: function(url){
            this.renderView();
            //HomeModel.fetch()
            //    .done(this.successResponse.bind(this))
            //    .fail(this.failResponse.bind(this));
        },

        successResponse: function(data){

            this.renderView(data);
        },

        failResponse: function(err){

        },

        renderView: function(data){
            this.childView = new HomeView();
            this.childView.render(data);
        }

    });

    return new HomeControler();
});