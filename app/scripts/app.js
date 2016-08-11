'use strict';

angular.module('simpleApp', [])

.controller('DishCommentController', ['$scope', function($scope) {

    $scope.dish = {
        name: 'first',
        image: 'images/img_5.jpg',
        category: 'mains',
        label: 'New',
        price: '4.99',
        description: 'A unique picture from the Liverpool..',
        comments: [{
                rating: 5,
                comment: "I lover Liverpool",
                author: "John Lennon",
                date: "2012-10-16T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "nice!",
                author: "Paul",
                date: "2014-09-05T17:57:28.556094Z"
            }, {
                rating: 3,
                comment: "ok!",
                author: "Ringo",
                date: "2015-02-13T17:57:28.556094Z"
            }, {
                rating: 4,
                comment: "ok",
                author: "Ringo",
                date: "2013-12-02T17:57:28.556094Z"
            }, {
                rating: 2,
                comment: "Eric Cantona",
                author: "Manchester is better",
                date: "2011-12-02T17:57:28.556094Z"
            }

        ]
    };

    $scope.filtText = '';

    $scope.submitData = {
      author: "",
      rating: "5",
      comment: "",
      date: ""
    };

    $scope.submitComment = function () {
        console.log("submitting...");
        console.log($scope.submitForm);
        console.log($scope.submitForm.yourname);

        console.log($scope.submitData);

        //"The date property of your JavaScript object holding the comment" = new Date().toISOString();
        $scope.submitData.date = new Date().toISOString();
        $scope.dish.comments.push($scope.submitData);
        $scope.submitForm.$setPristine();
        $scope.submitData = {
          author: "",
          rating: "5",
          comment: "",
          date: ""
        };
    }
}])

.controller('MenuController', ['$scope', function($scope) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };

    $scope.dishes = [{
            name: 'first',
            image: 'images/img_1.jpg',
            category: 'main',
            label: 'new',
            price: '4.99',
            description: 'A unique picture from the Liverpool.',
            comment: ''
        },

        {
            name: 'second',
            image: 'images/img_2.jpg',
            category: 'main',
            label: '',
            price: '1.99',
            description: 'A unique picture from the Liverpool.',
            comment: ''
        },

        {
            name: 'third',
            image: 'images/img_3.jpg',
            category: 'third',
            label: 'New',
            price: '1.99',
            description: 'A unique picture from the Liverpool.',
            comment: ''
        },

        {
            name: 'fourth',
            image: 'images/img_4.jpg',
            category: 'fourth',
            label: '',
            price: '2.99',
            description: 'A unique picture from the Liverpool.',
            comment: ''
        }
    ];

    $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
            $scope.filtText = "main";
        } else if (setTab === 3) {
            $scope.filtText = "third";
        } else if (setTab === 4) {
            $scope.filtText = "fourth";
        } else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function(checkTab) {
        return ($scope.tab === checkTab);
    };
}])

.controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };
        var channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])




    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email: ""
                };
                $scope.feedback.mychannel = "";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }]);
