/**
 * Created by oleksandrpop on 6/15/2016.
 */
define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseController;

    BaseController = Backbone.View.extend({
        events: {
            'click a': 'doNavigate'
        },

        doNavigate: function(e){
            e.preventDefault();
            Backbone.history.navigate(e.currentTarget.dataset.url, {trigger: true, replace: true});
            this.delegateEvents();
        }
    });

    return BaseController;
});