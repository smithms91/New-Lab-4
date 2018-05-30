"use strict";

function ProfileService() {
    let user = {};

    const getUserProfile = () => {
        return user;
    }

    const setUserProfile = (name, email, bio) => {
        user = {
            name: name,
            email: email,
            bio: bio
        }

    }

    return {
        getUserProfile,
        setUserProfile
    }
}



angular.module("lab4").factory("ProfileService", ProfileService);