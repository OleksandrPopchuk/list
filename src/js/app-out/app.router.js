/**
 * Created by oleksandrpop on 6/14/2016.
 */
define(function (require) {
    var Backbone = require('backbone'),
        HomeController = require('pages/home.page.controller'),
        ListController = require('pages/list.page.controller'),
        Router;

    Router = Backbone.Router.extend({

        routes: {
            '': 'homePage',
            'list': 'listPage',
            'list/:id': 'listItemPage'
        },

        homePage: function () {
            HomeController.action();
            console.log('[Router:homePage]');
        },

        listPage: function() {
            ListController.action();
            console.log('[Router:listPage]');
        },

        listItemPage: function(id){
            console.log('[Router:listPage:id]: ', id);
        }
    });

   return Router;
});