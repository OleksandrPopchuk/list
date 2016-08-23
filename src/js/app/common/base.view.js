define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        BaseView;

    BaseView = Backbone.View.extend({
        events: {
            'click a': 'doNavigate'
        },

        skipHandling: [
            'mailto:',
            'http://',
            'https://'
        ],

        doNavigate: function(e){
            var url = e.currentTarget.dataset.url || e.currentTarget.href;

            if (this.needHandle(url)) {
                e.preventDefault();
                Backbone.history.navigate(url, {trigger: true, replace: true});
            }
        },

        needHandle: function(url) {
            var i;

            for (i = 0; i < this.skipHandling.length; i++) {
                if (url.indexOf(this.skipHandling[i]) > -1) {
                    return false;
                }
            }

            return true;
        }
    });

    return BaseView;
});