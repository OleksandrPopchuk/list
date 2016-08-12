/**
 * Created by oleksandrpop on 6/14/2016.
 */
requirejs(['app'], function(App){

    window.globals = {
        regions: {
            header: document.getElementById('header'),
            left: document.getElementById('left-section'),
            main: document.getElementById('main-section'),
            right: document.getElementById('right-section'),
            footer: document.getElementById('footer')
        }
    };

    App.start();
});