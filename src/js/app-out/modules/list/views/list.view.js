define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListCollection = require('modules/list/collections/list.collection'),
        ListItemView = require('modules/list/views/list.item.view'),
        ListItemDetailsView = require('modules/list/views/list.item.details.view'),
        ListModel = require('modules/list/models/list.model'),
        ListView;

    ListView = BaseView.extend({
        collection: ListCollection,

        listItems: null,

        tagName: 'div',

        className: 'list-view-wrapper',

        isListEmpty: false,

        template: templateCollection['list.view.hbs'],

        additionalEvents: {
            'click .fn-add-new-contact': 'addNewContact'
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {
            this.listenTo(this.collection, 'remove', this.render);
            this.listenTo(this.collection, 'add', function(model) {
                var thisModel = this.collection.get(model),
                    listItemView = new ListItemView({model: thisModel}),
                    $listEl = this.$el.find('.fn-contacts-list');

                $listEl.append(listItemView.render(thisModel.attributes).$el);
                listItemView.showItemDetails();
            });
        },

        render: function(){
            this.$el.html(this.template());

            this.collection.fetch().done(function(response) {
                if (response.length) {
                    var listItemView = new ListItemView({model: this.collection.get(response[0].id)});

                    this.listItems = response;
                    this.showListItems();

                    listItemView.showItemDetails(null, this.$el.find('.fn-contact-details'));
                } else {
                    this.showEmptyList();
                }
            }.bind(this));

            return this;
        },

        showListItems: function() {
            var $listEl = this.$el.find('.fn-contacts-list'),
                listItemView;

            if (this.isListEmpty) {
                $listEl.clear();
                this.isListEmpty = false;
            }

            this.listItems.forEach(function(item, index) {
                listItemView = new ListItemView({model: this.collection.get(item.id)});

                $listEl.append(listItemView.render(item).$el);

                if (index === 0) {
                    this.$el.find('.list-item').addClass('active');
                }
            }.bind(this));
        },

        showEmptyList: function() {
            var $listEl = this.$el.find('.fn-contacts-list'),
                $contactDetailsEl = this.$el.find('.fn-contact-details');

            $listEl.html('No items to display');

            $contactDetailsEl.html('No contact selected');

            this.isListEmpty = true;
        },

        addNewContact: function() {
            var $listDetailsEl = this.$el.find('.fn-contact-details'),
                listModel = new ListModel(),
                listItemDetailsView;

            listModel.set('id', this.generateNewItemId());

            listItemDetailsView = new ListItemDetailsView({model: listModel});

            $listDetailsEl.html(listItemDetailsView.render().$el);

            listItemDetailsView.isNewItem = true;

            listItemDetailsView.activateEditMode();
        },

        generateNewItemId: function(addition) {
            var id;
            addition = addition || 0;
            id = this.collection.length + 1 + addition;

            return this.collection[id] ? this.generateNewItemId(addition + 1) : id;
        }
    });

    return ListView;
});