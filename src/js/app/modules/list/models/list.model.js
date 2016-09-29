define(function(require) {
    var Backbone = require('backbone'),
        ListModel;

    ListModel = Backbone.Model.extend({
        defaults: {
            id: '',
            firstName: '',
            lastName: '',
            photo: '/assets/imgs/contacts/dummy.png',
            site: '',
            bdate: '',
            city: '',
            bio: ''
        },

        idAttribute: 'id',

        sync: function() {

        }
    });

    return ListModel;
});