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

        render: function(){
            this.$el.html(this.template());

            this.collection.fetch().done(function(response) {
                var listItemView = new ListItemView({model: this.collection.get(response[0].id)});

                this.listItems = response;
                this.showListItems();

                listItemView.showItemDetails(null, this.$el.find('.fn-contact-details'));
            }.bind(this));

            return this;
        },

        showListItems: function() {
            var $listEl = this.$el.find('.fn-contacts-list'),
                listItemView;

            this.listItems.forEach(function(item, index) {
                listItemView = new ListItemView({model: this.collection.get(item.id)});

                $listEl.append(listItemView.render(item).$el);

                if (index === 0) {
                    this.$el.find('.fn-list-item').addClass('active');
                }
            }.bind(this));
        }
    });

    return ListView;
});