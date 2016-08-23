define(function(require){
    var $ = require('jquery'),
        vkHelper;

    vkHelper = {
        init: function() {
            var id = 5,
                friendsLimit = 5;

            $(window).on('getUserFriendsIdsCallback', function() {
                this.getFriendsDetails();
            }.bind(this));

            this.getUserFriendsIds(id, friendsLimit);
        },


        getUserFriendsIds: function(id, friendsLimit) {
            var script = document.createElement('SCRIPT'),
                usersIdArray;

            script.src = 'https://api.vk.com/method/friends.get?uid=' + id + '&callback=callbackFunc';

            function callbackFunc(result) {
                usersIdArray = result.response.slice(0, friendsLimit);

                window.globals.usersIdArray = usersIdArray;
                window.callbackFunc = null;

                $(window).trigger('getUserFriendsIdsCallback');
            }

            window.callbackFunc = callbackFunc;

            document.getElementsByTagName("head")[0].appendChild(script);
        },

        getFriendsDetails: function () {
            var userIds = window.globals.usersIdArray.toString(),
                script = document.createElement('SCRIPT'),
                user,
                users = [];

                script.src = 'https://api.vk.com/method/users.get?user_ids=' + userIds + '&fields=photo_max,home_town,bdate,site,quotes&callback=callbackFunc';

            function callbackFunc(result) {
                result.response.forEach(function(item) {
                    user = {
                        id: item.uid,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        photo: item.photo_max || 'dummy.png',
                        bdate: item.bdate || '',
                        site: item.site || '',
                        city: item.home_town || '',
                        bio: item.quotes || ''
                    };

                    users.push(user);
                });

                window.globals.users = users;
                window.callbackFunc = null;

                $(window).trigger('getFriendsDetailsCallback');
            }

            window.callbackFunc = callbackFunc;

            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };

    return vkHelper;
});