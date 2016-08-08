define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        templateCollection = require('template.collection'),
        ListView;

    ListView = Backbone.View.extend({

        tagName: 'div',

        className: 'list-view-wrapper',

        initialize: function(){
            this.$main =  $(window.globals.regions.main);
        },

        events: {
            'click .fn-nav': 'doNavigate'
        },

        template: templateCollection['list.view.hbs'],

        render: function(data){
            var element = this.$el.append(this.template());

            this.$main.empty().append(element);

            return this;
        },

        doNavigate: function(e){
            e.preventDefault();
            Backbone.history.navigate(e.currentTarget.dataset.url, {trigger: true, replace: true});
        }

    });

    return ListView;
});