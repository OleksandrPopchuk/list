define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        contacts = require('config/contacts'),
        ListModel = require('modules/list/models/list.model'),
        ListCollection;

    ListCollection = Backbone.Collection.extend({
        model: ListModel,

        initialize: function() {
            $(window).on('getFriendsDetailsCallback', function() {
                if (!window.localStorage.contacts) {
                    window.localStorage.setItem('contacts', JSON.stringify(window.globals.users));
                    this.fetch();
                    this.trigger('fetch');
                }
            }.bind(this));

            /*if (!window.localStorage.contacts) {
                window.localStorage.setItem('contacts', JSON.stringify(contacts.response));
            }*/

            this.listenTo(this, 'change add remove ', function() {
                this.sync();
            });
        },

        sync: function() {
            window.localStorage.setItem('contacts', JSON.stringify(this.models));
        },

        parse: function(contacts) {
            var i,
                photoUrl,
                siteUrl;

            for (i = 0; i < contacts.length; i++) {
                photoUrl = (contacts[i].photo.indexOf('http://') > -1 ||
                            contacts[i].photo.indexOf('https://') > -1) ?
                    contacts[i].photo :
                    'assets/imgs/contacts/' + contacts[i].photo;

                contacts[i].photo = photoUrl;

                siteUrl = contacts[i].site.split(' ')[0];

                contacts[i].site = (siteUrl.indexOf('http://') > -1 ||
                            siteUrl.indexOf('https://') > -1) ||
                            siteUrl === '' ?
                    siteUrl :
                    'http://' + siteUrl;
            }

            return contacts;
        },

        fetch: function () {
            var dfd = $.Deferred(),
                contacts;

            if (window.localStorage.getItem('contacts')) {
                contacts = this.parse(JSON.parse(window.localStorage.getItem('contacts')));
                this.reset(contacts);
                return dfd.resolve(contacts);
            } else {
                return dfd.resolve();
            }
        }
    });

    return new ListCollection();
});