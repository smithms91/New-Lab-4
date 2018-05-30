"use strict";

const userProfile = {
    template: `
    <div id="profile_section">
        <div class="top">
            <img class="contact_image" src="img/logo.png">
        </div>
        <div class="bottom">
            <h1 class="contact_header">{{($ctrl.currentUser.name || 'Mike')}}</h1>
            <p class="contact_info">{{$ctrl.currentUser.email || 'stuff@gmail.com'}}</p>
            <p class="contact_bio">{{$ctrl.currentUser.bio || 'So much cool stuff I cant even remember it all.'}}</p>
            <button class="contact_button" ng-click="$ctrl.editInfo($ctrl.currentUser)">Edit</button>
        </div>
    </div>
    `,
    controller: ["$location", "ProfileService", function($location, ProfileService) {
        const vm = this;
        vm.currentUser = ProfileService.getUserProfile();
        vm.editInfo = (user) => {
            ProfileService.setUserProfile(user.name, user.email, user.bio);
            $location.path("/edit-profile");
        };
    }]
}


angular.module("lab4").component("userProfile", userProfile);