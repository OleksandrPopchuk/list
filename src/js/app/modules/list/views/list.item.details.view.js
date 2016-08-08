define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListCollection = require('modules/list/collections/list.collection'),
        ListModel = require('modules/list/models/list.model'),
        ListDetailsView;

    ListDetailsView = BaseView.extend({
        collection: ListCollection,

        template: templateCollection['list.item.details.hbs'],

        currentItem: null,

        additionalEvents: {
            'click .fn-edit-phone': 'editPhone'
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {
            this.listenTo(this.model, 'itemUpdated', function() {
                this.render(this.currentItem); //!!! not currentItem, but updated one!
            });
        },

        render: function(item){
            this.$el.html(this.template(item));

            this.currentItem = item;

            return this;
        },

        editPhone: function() {
            this.model.set('phone', '123120000');
            this.model.save();
        }
    });

    return ListDetailsView;
});