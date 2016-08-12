define(function(require) {
    var Backbone = require('backbone'),
        ListModel;

    ListModel = Backbone.Model.extend({
        defaults: {
            id: '',
            firstName: '',
            lastName: '',
            photo: 'dummy.png',
            phone: '',
            email: '',
            city: '',
            bio: ''
        },

        idAttribute: 'id',

        sync: function() {

        }
    });

    return ListModel;
});