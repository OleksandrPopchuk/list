requirejs(['jquery', 'modules/list/views/list.view'], function($, ListView){

    describe("List View", function() {
        afterEach(function() {
            $('#testContainer').empty();
        });

        it("should render List view properly", function() {
            var listView = new ListView();
            listView.render().$el.appendTo('#testContainer');

            expect($('.list-view-wrapper').length).toEqual(1);
        });

        it("should render new contact form on \'Add new contact\' button click", function() {
            var listView = new ListView();

            listView.render().$el.appendTo('#testContainer');

            $('.fn-add-new-contact').trigger('click');

            expect($('.fn-contact-save').hasClass('hidden')).toBe(false);
            expect($('.photo').attr('src')).toEqual('/assets/imgs/contacts/dummy.png');
        });

        it("should call \'generateNewItemId\' method when \'addNewContact\' method is triggered", function() {
            var listView = new ListView();
            listView.render().$el.appendTo('#testContainer');
            spyOn(listView, 'generateNewItemId');


            listView.addNewContact();

            expect(listView.generateNewItemId).toHaveBeenCalled();

        });
    });
});