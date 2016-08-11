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

        currentItem: null,

        photoChanged: false,

        overlay: null,

        additionalEvents: {
            'click .fn-contact-remove': 'handleRemoveContact',
            'click .fn-contact-remove-cancel': 'removeContactCancel',
            'click .fn-contact-remove-confirm': 'removeContact',
            'click .fn-contact-edit': 'activateEditMode',
            'click .fn-contact-cancel': 'deactivateEditMode',
            'click .fn-contact-save': 'saveContact',
            'click .fn-edit-photo.editable': 'editPhoto',
            'change .fn-photo-upload': 'uploadPhoto'
        },

        events: function() {
            return _.extend(BaseView.prototype.events, this.additionalEvents);
        },

        initialize: function() {
            this.listenTo(this.collection, 'change', function(model) {
                this.render(model.attributes);
            });
        },

        render: function(item){
            this.$el.html(this.template(item));

            this.currentItem = item;

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
                srcPath = $photoEl.attr('src').match(/(.*\/)/g);

            $photoWrapper.removeClass('editable');
            $photoEl.attr('src', srcPath + this.model.get('photo'));
            $photoUploadEl.val('');
            $dataSpans.removeClass('hidden');
            $editButton.removeClass('hidden');
            $removeButton.removeClass('hidden');
            $editInputs.addClass('hidden');
            $saveButton.addClass('hidden');
            $cancelButton.addClass('hidden');
        },

        saveContact: function() {
            var $editInputs = this.$el.find('.fn-edit-input'),
                $photoInput = this.$el.find('.fn-photo-upload'),
                input,
                value;

            $editInputs.each(function(index) {
                input = $editInputs[index];
                value = input.value;

                this.model.set(input.dataset.field, value);
            }.bind(this));

            if (this.photoChanged) {
                this.model.set('photo', $photoInput[0].files[0].name);
            }

            this.model.save();
            this.deactivateEditMode();
        },

        editPhoto: function() {
            this.$el.find('.fn-photo-upload')[0].click();
        },

        uploadPhoto: function(e) {
            var fileType = e.target.files[0].type,
                fileName = e.target.files[0].name,
                $photoEl = this.$el.find('.photo'),
                srcPath = $photoEl.attr('src').match(/(.*\/)/g);

            if (fileType.indexOf('image/') > -1) {
                if (fileName !== this.model.get('photo')) {
                    this.photoChanged = true;
                    $photoEl.attr('src', srcPath + fileName);
                }
            } else {
                console.log('File uploaded is not an image');
            }
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