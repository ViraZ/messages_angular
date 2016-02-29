var app = angular.module('app', ['ngMessages']);
app.controller('MainCtrl', function(MainCtrl){
    var main = this;
    main.action= function(scope){
        //$scope.hideExpression.hasOwnProperty();
    }
});

function MainCtrl(scope) {
    $scope.fields = [
        {
            'type': "input",
            "key": "name",
            'templateOptions': {
                "required": true,
                "label": "name",
                "placeholder": "name"
            }
        }, {
            "key": "email",
            "type": "input",
            "templateOptions": {
                required: true,
                "type": "email",
                "label": "Email",
                "placeholder": "email"
            },
            "hideExpression": "!model.name"
        }
    ]

};
