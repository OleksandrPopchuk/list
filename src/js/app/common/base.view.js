define(function(require) {
    var Backbone = require('backbone'),
        BaseView;

    BaseView = Backbone.View.extend({
        events: {
            'click a': 'doNavigate'
        },

        doNavigate: function(e){
            var url = e.currentTarget.dataset.url;

            if (url.indexOf('mailto:') !== 0) {
                e.preventDefault();
                Backbone.history.navigate(url, {trigger: true, replace: true});
            }
        }
    });

    return BaseView;
});