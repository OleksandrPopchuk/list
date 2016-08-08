define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListDetailsView;

    ListDetailsView = BaseView.extend({
        template: templateCollection['list.item.details.hbs'],

        additionalEvents: {

        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {

        },

        render: function(item){
            this.$el.html(this.template(item));

            return this;
        }
    });

    return ListDetailsView;
});