define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        BaseView = require('common/base.view'),
        ListCollection = require('modules/list/collections/list.collection'),
        ListDetailsView;

    ListDetailsView = BaseView.extend({
        collection: ListCollection,

        template: templateCollection['list.item.details.hbs'],

        photoChanged: false,

        isNewItem: false,

        overlay: null,

        additionalEvents: {
            'click .fn-contact-remove': 'handleRemoveContact',
            'click .fn-contact-remove-cancel': 'removeContactCancel',
            'click .fn-contact-remove-confirm': 'removeContact',
            'click .fn-contact-edit': 'activateEditMode',
            'click .fn-contact-cancel': 'deactivateEditMode',
            'click .fn-contact-save': 'saveContact',
            'click .fn-edit-photo.editable': 'editPhoto'
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {
            this.listenTo(this.collection, 'change add', function(model) {
                this.render(model.attributes);
            });
        },

        render: function(){
            this.$el.html(this.template(this.model.attributes));

            this.overlay = this.$el.find('.fn-contact-details-overlay');

            return this;
        },

        activateEditMode: function() {
            var $photoWrapper = this.$el.find('.fn-edit-photo'),
                $editInputs = this.$el.find('.fn-edit-input'),
                $dataSpans = this.$el.find('.data-span'),
                $editButton = this.$el.find('.fn-contact-edit'),
                $removeButton = this.$el.find('.fn-contact-remove'),
                $saveButton = this.$el.find('.fn-contact-save'),
                $cancelButton = this.$el.find('.fn-contact-cancel');

            $photoWrapper.addClass('editable');
            $dataSpans.addClass('hidden');
            $editButton.addClass('hidden');
            $removeButton.addClass('hidden');
            $editInputs.removeClass('hidden');
            $saveButton.removeClass('hidden');
            $cancelButton.removeClass('hidden');
        },

        deactivateEditMode: function() {
            var $photoWrapper = this.$el.find('.fn-edit-photo'),
                $photoEl = this.$el.find('.photo'),
                $photoUploadEl = this.$el.find('.fn-photo-upload'),
                $editInputs = this.$el.find('.fn-edit-input'),
                $dataSpans = this.$el.find('.data-span'),
                $editButton = this.$el.find('.fn-contact-edit'),
                $removeButton = this.$el.find('.fn-contact-remove'),
                $saveButton = this.$el.find('.fn-contact-save'),
                $cancelButton = this.$el.find('.fn-contact-cancel'),
                itemId;

            $photoWrapper.removeClass('editable');
            $photoEl.attr('src', this.model.get('photo'));
            $photoUploadEl.val('');
            $dataSpans.removeClass('hidden');
            $editButton.removeClass('hidden');
            $removeButton.removeClass('hidden');
            $editInputs.addClass('hidden');
            $saveButton.addClass('hidden');
            $cancelButton.addClass('hidden');

            if (this.isNewItem) {
                itemId = $('.list-item.active').find('.fn-list-item').attr('data-item-id');
                this.model = this.collection.get(itemId);
                this.isNewItem = false;

                this.render(this.collection.get(itemId));
            }
        },

        saveContact: function() {
            var $editInputs = this.$el.find('.fn-edit-input'),
                input,
                value;

            $editInputs.each(function(index) {
                input = $editInputs[index];
                value = input.value;

                this.model.set(input.dataset.field, value);
            }.bind(this));

            this.model.set('photo', this.imageLink);

            this.model.save();

            if (this.isNewItem) {
                this.collection.add(this.model);
                this.isNewItem = false;
            }

            this.deactivateEditMode();
        },

        editPhoto: function() {
            this.imageLink = window.prompt('Please insert link to image');
            this.savePhoto();
        },

        savePhoto: function() {
            var $photoEl = this.$el.find('.photo');

            if (!this.imageLink) {
                return;
            }

            $photoEl.attr('src', this.imageLink);
        },

        handleRemoveContact: function() {
            this.overlay.removeClass('hidden');
        },

        removeContactCancel: function() {
            this.overlay.addClass('hidden');
        },

        removeContact: function() {
            this.model.destroy();
        }
    });

    return ListDetailsView;
});