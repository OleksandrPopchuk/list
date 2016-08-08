define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        contacts = require('config/contacts'),
        ListModel = require('modules/list/models/list.model'),
        ListCollection;

    ListCollection = Backbone.Collection.extend({
        model: ListModel,

        initialize: function() {
            window.localStorage.setItem('contacts', JSON.stringify(contacts.response));
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