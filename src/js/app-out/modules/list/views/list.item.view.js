define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListView;

    ListView = BaseView.extend({
        tagName: 'li',

        className: 'list-item fn-list-item',

        template: templateCollection['list.item.hbs'],

        additionalEvents: {
            'click .fn-list-item': this.showItem
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {

        },

        render: function(item){
            this.$el.html(this.template(item));

            this.$el.attr('data-item-id', item.id);

            return this;
        },

        showItem: function() {

        }
    });

    return ListView;
});