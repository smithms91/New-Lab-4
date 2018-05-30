"use strict";

const editProfile = {
    template: `
    <div id="edit_section">
       <h1 class="edit_header">Use the form below to update your profile.</h1>
       <form class="edit_form" ng-submit="$ctrl.updateData($ctrl.user)">
        <label>Name</label>
        <input class="edit" type="text" ng-model="$ctrl.user.name">
        <label>Contact</label>
        <input class="edit" type="text" ng-model="$ctrl.user.email">
        <label>Bio</label>
        <textarea rows="8" class="edit" ng-model="$ctrl.user.bio"></textarea>
        <button class="edit_button">Update</button>
       </form>
    </div>
    `,
    controller: ["$location","ProfileService", function($location, ProfileService) {
        const vm = this;
        vm.user = ProfileService.getUserProfile();
        vm.updateData = (user) => {
            ProfileService.setUserProfile(user.name, user.email, user.bio);
            $location.path("/user-profile");
        }
    }]
}


angular.module("lab4").component("editProfile", editProfile);