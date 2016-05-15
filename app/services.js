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
]);





// .service('translationService', function($resource) {
//         this.getTranslation = function($scope, language) {
//             var languageFilePath = 'http://weboratory.io/oba/app/data/translation_' + language + '.json';
//             $resource(languageFilePath).get(function (data) {
//                 $scope.translation = data;
//             });
//         };
//     });