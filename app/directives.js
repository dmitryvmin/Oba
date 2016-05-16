'use strict';

/* Directives */

angular.module('obaApp')

// deractive for the Odometer on the meet page
.directive('odometer', function () {
    return {
        restrict: 'A',
        scope: {
            endValue: '=value'
        },
        link: function(scope, element) {
            var od = new Odometer({
                el: element[0],
                value: 0 // default value
            });
            // update the odometer element when there is a change in the model value
            scope.$watch('endValue', function () {
                od.update(scope.endValue)
            });
        }
    }
})

// .directive('twitterFetcher', function () {
//     return {
//         restrict: 'A',
//         link: function(scope, elem, attrs) {
//             var LatestTweets = {
//                 init: function () {
//                     twitterFetcher.fetch({
//                         id: '589594498209959937',
//                         domId: 'latest-tweets',
//                         showImages: false
//                     });
//                 }
//             };
//             LatestTweets.init();
//             console.log('Twitter Fetcher directive active');
//         }
//     }
// })

.directive('tweets', function () {
    return {
        restrict: 'A',
        scope: {
            tweets: '=tweets'
        },
        template: '<ul><li ng-repeat="tweet in tweets"><p class="tweet" ng-bind-html="tweet.html">{{tweet.html}}</p></li></ul>'
        // ,link: function(scope, elem, attrs) {
        //     // scope.$watch('locations', function(locations) {
        //     //     angular.forEach(locations, function(location, key) {
        //     //       // do something
        //     //     });
        //     //   });
        //     debugger;
        //     scope.$on('twitter_json_ready', function() {
        //         console.log('Twitter Fetcher directive active');
        //     });
        // }
    }
})

.directive('inttweets', function () {
    return {
        restrict: 'E',
        scope: {
            inttweets: '=inttweets'
        },
        template: '<ul><li ng-repeat="tweet in inttweets"><p class="tweet" ng-bind-html="tweet.html">{{tweet.html}}</p><div class="date timePosted">{{tweet.updated}}</div><p class="interact"><a href="{{tweet.permalink}}" class="twitter-reply-icon">Reply</a><a href="{{tweet.permalink}}" class="twitter-retweet-icon">Retweet</a><a href="{{tweet.permalink}}" class="twitter-fav-icon">Favorite</a></p><div class="tweet-bg default-img" style="background: url({{tweet.inlineMedia.url}}) no-repeat;"></div></li>'
        // ,link: function(scope, elem, attrs) {
        //     // scope.$watch('locations', function(locations) {
        //     //     angular.forEach(locations, function(location, key) {
        //     //       // do something
        //     //     });
        //     //   });
        //     debugger;
        //     scope.$on('twitter_json_ready', function() {
        //         console.log('Twitter Fetcher directive active');
        //     });
        // }
    }
})

// directives for the Slick Slider used on the home and meet pages
// Home slider watches until it's in-view to initiate
.directive('slickSliderHome', function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            'data' : '='
        },
        link: function(scope, element, attrs) {

            $timeout(function() {
                $(element).slick(scope.$eval(attrs.slickSliderHome));
                $(element).slick('slickPause');
                console.log('slider is rendered and paused');
            });
        }

        // TODO: as soon as the the slider is rendered pause it via the slickPause method

        // TODO: set up a watch that waits until the slider is in-view

        // TODO: when slider is in view a function will call slider slickPlay method

    }
})

//TODO: merge the two slider directive
.directive('slickSlider', function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            'data' : '='
        },
        link: function(scope, element, attrs) {
            $timeout(function() {
                $(element).slick(scope.$eval(attrs.slickSlider));
            });
        }
    }
})

// directive for onloading images; used on the contact partial
.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log('image is loaded');
            });
        }
    };
})

// directive for loading background-image property
.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')'
            });
        });
    };
})

// .directive('videobg', function() {
//     return {
//         restrict: 'E',
//         scope: true,
//         link: function (scope, elem, attrs) {
//             $(elem).tubular({
//                 videoId: 'p7_7s9EUwZc'
//             ,   mute: true
//             ,   repeat: true
//             });
//         }
//     }
// })

.directive('videobg', function() {
    return {
        restrict: 'E',
        scope: true,
        link: function (scope, elem, attrs) {
            $(elem).YTPlayer({
                fitToBackground: false,
                videoId: 'p7_7s9EUwZc'
            });
        }
    }
});

// .directive('pongstgrm', function() {
//     return {
//         restrict: 'E',
//         scope: true,
//         link: function (scope, elem, attrs) {
//             $(elem).pongstgrm({
//                 show:             'recent'
//             ,   accessId:     '350201257'
//             ,   accessToken:  '350201257.9736c97.85132500f7a14e669d708255b734637d'
//             });
//         }
//     }
// });


// <div data-ar-mobile>
//     Only shown on mobile devices {{ email }}
//     <img ng-src="http://betanews.com/wp-content/uploads/2012/02/businessready.jpg" src="" alt="mobile"
//          width="50" height="50"/>
// </div>
// <div data-ar-tablet>
//     Only shown on tablet devices {{ email }}
//     <img ng-src="http://www1.pcmag.com/media/images/320913-tablet-satisfaction.jpg" src="" alt="tablets"
//          width="50" height="50"/>
// </div>
// <div data-ar-desktop>
//     Only shown on desktop devices {{ email }}
//     <img ng-src="http://cdn.arstechnica.net/wp-content/uploads/2012/08/Acer-Aspire-A5560-7414.png" src=""
//          alt="desktop" width="50" height="50"/>
// </div>
// <div data-ar-responsive="{ 'Mobile': true, 'Tablet': true, 'Desktop': false }">
//     Only shown on mobile or tablet devices {{ email }}
//     <img ng-src="http://mygooseworks.com/home/images/stories/mobiledevices.jpg" src="" alt="tablets and mobile"
//          width="50" height="50"/>
// </div>