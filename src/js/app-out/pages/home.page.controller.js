define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ViewUtil = require('utils/view.util'),
        HomeView = require('modules/home/views/home.view'),
        HomeController;

    HomeController = Backbone.View.extend({
        action: function(){
            this.$main = $(window.globals.regions.main);

            this.$main.append(ViewUtil.showView(new HomeView()));
        }
    });

    return new HomeController();
});