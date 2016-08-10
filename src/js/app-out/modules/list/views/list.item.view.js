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
            this.listenTo(this.collection, 'change', function(model) {
                if (this.model.id === model.id) {
                    this.render(model.attributes);
                    this.setActiveListItem(model.id);
                }
            });
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

            this.collection.fetch().done(function(response) {
                listItems = response;
                item = e ?
                    listItems.filter(function(i){ return i.id == e.currentTarget.dataset.itemId; })[0] :
                    listItems[0];

                listItemDetailsView = new ListItemDetailsView({model: this.collection.get(item.id)});

                $listDetailsEl.html(listItemDetailsView.render(item).$el);

                this.setActiveListItem(item.id);
            }.bind(this));
        },

        setActiveListItem: function(id) {
            $('.fn-list-item').removeClass('active');
            $('.fn-list-item[data-item-id=' + id + ']').addClass('active');
        }
    });

    return ListView;
});