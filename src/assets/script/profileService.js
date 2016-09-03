var app = angular.module('profileApp.profileServices', []);

app.service('ProfileServices', function (
    $resource
) {
    return {
        // Get personal detail file
        getPersonalDetail: function () {
            return $resource('data/personalDetail.json');
        },
        // Get profesionall detail file
        getProfessionalDetail: function () {
            return $resource('data/professionalDetail.json');
        }
    }
});