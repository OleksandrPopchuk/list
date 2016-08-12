define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        contacts = require('config/contacts'),
        ListModel = require('modules/list/models/list.model'),
        ListCollection;

    ListCollection = Backbone.Collection.extend({
        model: ListModel,

        initialize: function() {
            if (!window.localStorage.contacts) {
                window.localStorage.setItem('contacts', JSON.stringify(contacts.response));
            }

            this.listenTo(this, 'change add remove ', function() {
                this.sync();
            });
        },

        sync: function() {
            window.localStorage.setItem('contacts', JSON.stringify(this.models));
        },

        fetch: function () {
            var dfd = $.Deferred(),
                contacts = JSON.parse(window.localStorage.getItem('contacts'));
            this.reset(contacts);
            return dfd.resolve(contacts);
        }
    });

    return new ListCollection();
});