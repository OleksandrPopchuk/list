define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListCollection = require('modules/list/collections/list.collection'),
        ListItemView = require('modules/list/views/list.item.view'),
        ListView;

    ListView = BaseView.extend({
        collection: ListCollection,

        listItems: null,

        tagName: 'div',

        className: 'list-view-wrapper',

        template: templateCollection['list.view.hbs'],

        additionalEvents: {},

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {
            this.collection.on('sync', this.render.bind(this));
        },

        render: function(){
            this.$el.html(this.template());

            this.collection.fetch().done(function(response) {
                this.listItems = response;
                this.showListItems();
            }.bind(this));

            return this;
        },

        showListItems: function() {
            var $listEl = this.$el.find('.fn-contacts-list'),
                listItemView;

            this.listItems.forEach(function(listItem) {
                listItemView = new ListItemView();

                $listEl.append(listItemView.render(listItem).$el);
            });
        }
    });

    return ListView;
});