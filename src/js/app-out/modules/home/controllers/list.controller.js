/**
 * Created by oleksandrpop on 6/15/2016.
 */
define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ListView = require('modules/home/views/home.view'),
        ListControler;

    ListControler = Backbone.View.extend({
        initialize: function(){

        },

        start: function(){
            this.renderView();
        },

        successResponse: function(data){

            this.renderView(data);
        },

        failResponse: function(err){

        },

        renderView: function(data){
            this.childView = new ListView();
            this.childView.render(data);
        }

    });

    return new ListControler();
});