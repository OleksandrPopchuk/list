define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListCollection = require('modules/list/collections/list.collection'),
        ListItemDetailsView = require('modules/list/views/list.item.details.view'),
        ListView;

    ListView = BaseView.extend({
        collection: ListCollection,

        template: templateCollection['list.item.hbs'],

        additionalEvents: {
            'click .fn-list-item': 'showItemDetails'
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {

        },

        render: function(item){
            this.$el.html(this.template(item));

            this.$el.find('.fn-list-item').attr('data-item-id', item.id);

            return this;
        },

        showItemDetails: function(e, element) {
            var $listDetailsEl = element || $('.fn-contact-details'),
                item,
                listItems,
                listItemDetailsView;

            listItemDetailsView = new ListItemDetailsView();

            this.collection.fetch().done(function(response) {
                listItems = response;
                item = e ?
                    response.filter(function(i){ return i.id == e.currentTarget.dataset.itemId; })[0] :
                    response[0];
                $listDetailsEl.html(listItemDetailsView.render(item).$el);
            }.bind(this));

        }
    });

    return ListView;
});