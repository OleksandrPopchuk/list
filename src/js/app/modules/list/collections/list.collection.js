define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        contacts = require('config/contacts'),
        ListModel = require('modules/list/models/list.model'),
        ListCollection;

    ListCollection = Backbone.Collection.extend({
        model: ListModel,

        fetch: function () {
            var dfd = $.Deferred();
            this.reset(contacts.response);
            return dfd.resolve(contacts.response);
        }
    });

    return new ListCollection();
});