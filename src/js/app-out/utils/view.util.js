define(function(require){

    var ViewUtil = {
        currentView : null,

        showView : function(view) {
            if (this.currentView !== null && this.currentView.cid != view.cid) {
                this.currentView.remove();
            }

            this.currentView = view;
            view.render();

            return view.$el;
        }
    };

    return ViewUtil;
});