'use strict';

/* Factories and Services */

angular.module('obaApp')

.service('dataService', function() {
    // var twitter_json_ready = false,
    //     data;

    // var set = function(bool) {
    //         if (bool != 'undefined') {
    //             twitter_json_ready = bool;
    //         }
    //         return twitter_json_ready;
    //     };

    // var store = function(data) {
    //         data = data;
    //     };

    // var getBool = function() {
    //         return twitter_json_ready;
    //     };

    // var getData = function() {
    //         debugger;
    //         return data; 
    //     };
})

// Service for loading article json data
.factory('articleService', ['$http', '$q',
    function articleService($http, $q) {
        // interface
        var service = {
            articles: [],
            getArticles: getArticles
        };
        return service;

        // implementation
        function getArticles() {
            var def = $q.defer();

            $http.get("app/data/news.json")
                .success(function(data) {
                    service.articles = data;
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to get articles");
                });
            return def.promise;
        }
    }
])
// pulls in twitter data from the twitter widget
// this will break if/when Twitter changes their html markup :S
.factory('twitterData', ['$http', '$q',
    function twitterData($http, $q) {
       return {
         getTwitterData: function() {
           var def = $q.defer();
           var url = "https://cdn.syndication.twimg.com/widgets/timelines/589594498209959937?&amp;lang=en&amp;suppress_response_codes=true&amp;rnd=" + Math.random() + "&amp;callback=JSON_CALLBACK";
         // $http.get(url).success(function (data, status, headers, config) {
         //        console.log(data);
         //        def.resolve(data);
         //    }).error(function (data, status, headers, config) {
         //        console.log(status);
         //        def.reject(status);
         //    });
          //  return def.promise;
          $http.jsonp(url).
            success(function(data, status, headers, config) {

                def.resolve(data)
                
            }).
        error(function(data, status, headers, config) {
            def.reject("Failed to get Twitter data");
        });

        var json = def.promise.then (function(result) {
            return parse(result);
        });

        return json;

        //return parse(def.promise);

     }
    } 

    function parse(data) {
          var response = {
            headers: data.headers,
            tweets: []
          },
          els,
          el,
          tweet,
          x,
          tmp;

          if (data.body) {
              els = angular.element(data.body)[0].getElementsByClassName('timeline-Tweet');
              for (x = 0; x < els.length; x++) {
                el = els[x];
                tweet = {};
                tweet.retweet = (el.getElementsByClassName('timeline-Tweet-retweetCredit').length > 0);
                tweet.id = el.getAttribute('data-tweet-id');
                tmp = el.getElementsByClassName('timeline-Tweet-text')[0];
                tweet.html = tmp.innerHTML;
                tweet.text = tmp.textContent || tmp.innerText; // IE8 doesn't support textContent
                tmp = el.getElementsByClassName('timeline-Tweet-author')[0];
                tweet.author = {
                  url: tmp.getElementsByClassName('TweetAuthor-link')[0].getAttribute('href'),
                  avatar: tmp.getElementsByClassName('Avatar')[0].getAttribute('data-src-1x'),
                  fullName: tmp.getElementsByClassName('TweetAuthor-name')[0].innerText,
                  nickName: tmp.getElementsByClassName('TweetAuthor-screenName')[0].innerText
                };
                tweet.updated = dateFormatter(el.getElementsByClassName('dt-updated')[0].innerText);
                tweet.permalink = el.getElementsByClassName('timeline-Tweet-timestamp')[0].getAttribute('href');
                if (el.getElementsByClassName('timeline-Tweet-media')[0]) {
                    //debugger;
                  var rawStr = el.getElementsByClassName('timeline-Tweet-media')[0]
                    .getElementsByTagName('img')[0];
                  var srcStr = rawStr.dataset.srcset || rawStr.getAttribute('src');
                  var cutStr;
                  if (srcStr.indexOf(' ') != -1) {
                    cutStr = srcStr.substr(0,srcStr.indexOf(' '));
                  } else {
                    cutStr = srcStr;
                  }
                  var decodedStr = decodeURIComponent(cutStr);
                  tweet.inlineMedia = {
                    html: el.getElementsByClassName('timeline-Tweet-media')[0].innerHTML,
                    url: decodedStr

                  }
                } else {
                    tweet.inlineMedia = {
                        html: '',
                        url: 'img/theme/twitter-icon.png'
                    }
                }
                response.tweets.push(tweet);
              }
            }
          return response;
        }


        function dateFormatter(date) {
            var month,
                thisDate = new Date(date);

            switch(thisDate.getMonth()) {
            case 0:
                month="1";
                break;
            case 1:
                month="2";
                break;
            case 2:
                month="3";
                break;
            case 3:
                month="4";
                break;
            case 4:
                month="5";
                break;
            case 5:
                month="6";
                break;
            case 6:
                month="7";
                break;
            case 7:
                month="8";
                break;
            case 8:
                month="9";
                break;
            case 9:
                month="10";
                break;
            case 10:
                month="11";
                break;
            default:
                month="12";
          }
          var year = thisDate.getFullYear();
          year = year.toString().substr(2,2);

          return month + "." + thisDate.getDate() + "." + year;
        }

}
]);





// .service('translationService', function($resource) {
//         this.getTranslation = function($scope, language) {
//             var languageFilePath = 'http://weboratory.io/oba/app/data/translation_' + language + '.json';
//             $resource(languageFilePath).get(function (data) {
//                 $scope.translation = data;
//             });
//         };
//     });