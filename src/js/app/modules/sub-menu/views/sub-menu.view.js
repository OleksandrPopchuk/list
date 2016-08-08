/**
 * Created by oleksandrpop on 6/15/2016.
 */
define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        SubMenu;

    SubMenu = Backbone.View.extend({

        tagName: 'div',

        className: 'sub-menu-view-wrapper',

        initialize: function(){

        },

        events: {

        },

        template: templateCollection['sub.menu.view.hbs'],


        render: function(){
            this.$el.append(this.template());

            return this;
        }

    });

    return SubMenu;
});