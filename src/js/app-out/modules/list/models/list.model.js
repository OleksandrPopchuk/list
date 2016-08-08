define(function(require) {
    var Backbone = require('backbone'),
        ListModel;

    ListModel = Backbone.Model.extend({
        defaults: {
            id: '',
            firstName: '',
            lastName: '',
            photo: '',
            phone: '',
            email: '',
            city: '',
            bio: ''
        },

        idAttribute: 'id',

        sync: function(method, model, options) {
            if (method === 'update') {
                return this.saveItem(model, options);
            }
        },

        saveItem: function(model, options) {
            var items = JSON.parse(window.localStorage.contacts),
                i,
                indexInArray;

            for (i = 0; i < items.length; i++ ) {
                if (items[i].id == model.attributes.id) {
                    indexInArray = i;
                    break;
                }
            }

            items[indexInArray].phone = model.attributes.phone;

            window.localStorage.contacts = JSON.stringify(items);

            this.trigger('itemUpdated');
        }
    });

    return ListModel;
});