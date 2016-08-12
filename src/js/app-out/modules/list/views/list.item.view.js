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

        tagName: 'li',

        className: 'list-item',

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
                    this.setActiveListItem();
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
                listItemDetailsView;

            this.collection.fetch().done(function() {
                listItemDetailsView = new ListItemDetailsView({model: this.collection.get(this.model)});

                $listDetailsEl.html(listItemDetailsView.render().$el);

                this.setActiveListItem();
            }.bind(this));
        },

        setActiveListItem: function() {
            var $listItems = $('.list-item'),
                itemId = this.collection.get(this.model).id;

            $listItems.removeClass('active');
            $listItems.find('[data-item-id=' + itemId +']').parent().addClass('active');
        }
    });

    return ListView;
});