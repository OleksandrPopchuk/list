define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        ViewUtil = require('utils/view.util'),
        ListView = require('modules/list/views/list.view'),
        ListController;

    ListController = Backbone.View.extend({
        action: function(){
            this.$main = $(window.globals.regions.main);

            this.$main.append(ViewUtil.showView(new ListView()));
        }
    });

    return new ListController();
});