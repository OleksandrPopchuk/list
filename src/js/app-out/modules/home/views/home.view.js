define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        HomeView;

    HomeView = BaseView.extend({
        tagName: 'div',

        className: 'home-view-wrapper',

        template: templateCollection['home.view.hbs'],

        additionalEvents: {},

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        render: function(){
            this.$el.html(this.template());

            return this;
        }
    });

    return HomeView;
});