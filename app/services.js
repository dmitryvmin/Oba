'use strict';

/* Services */

angular.module('obaApp')

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
            //what do I do here?
            console.log(data);
                def.resolve(data);
            }).
        error(function(data, status, headers, config) {
            def.reject("Failed to get Twitter data");
        });

return def.promise;
     }
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