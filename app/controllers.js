'use strict';

/* Controllers */

angular.module('obaApp')

.controller('mainController', ['$scope', '$rootScope', '$state', '$sce', '$translate', 'twitterData', 'dataService', function($scope, $rootScope, $state, $sce, $translate, twitterData, dataService) {

    // TODO: Setup up controller instance as the view-model
    // var vm = this;

    $scope.$state = $state;
    // console.log($state.current);

    $scope.is = function(name){
       return $state.is(name);
    }

    $scope.includes = function(name){
       return $state.includes(name);
    }

    // responsive navigation
    $scope.collapseMenu = function() {
        //if ($(window).width() <= 768) {
            console.log('close navigation');
            $scope.navCollapsed = true;
        //}
    };

    // Video
    $scope.config = {
        preload: 'none'
    ,   sources: [
            {src: $sce.trustAsResourceUrl('http://obafemimartins9.com/vid/optimized/oba-video.mp4'), type: 'video/mp4'}
        ,   {src: $sce.trustAsResourceUrl('http://obafemimartins9.com/vid/optimized/oba-video.webm'), type: 'video/webm'}
        ,   {src: $sce.trustAsResourceUrl('http://obafemimartins9.com/vid/optimized/oba-video.ogv'), type: 'video/ogv'}
        ]
    ,   autoPlay: true
    ,   loop: true
    };

    // contact form
    $scope.contactVisible = false;

    $scope.toggleContact = function() {
        // console.log('toggle visibility is', $scope.contactVisible, 'toggle and set to', !$scope.contactVisible);
        $scope.contactVisible = !$scope.contactVisible;
    };

    $scope.toggleLanguage = function() {
        console.log('toggle language');
    }
    // $(window).on("resize.doResize", function (){
    //     alert(window.innerWidth);

    //     $scope.$apply(function() {
    //        //do something to update current scope based on the new innerWidth and let angular update the view.
    //     });
    // });

    // $scope.$on("$destroy",function (){
    //      $(window).off("resize.doResize"); //remove the handler added earlier
    // });

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

    // Twitter scrolling ticker directive

    twitterData.getTwitterData()
        .then(function(data) {
            $scope.tweets = data.tweets;
            //$scope.$broadcast('twitter_json_ready');
            $scope.twitter_json_ready = true;
            // dataService.set(true);
            // dataService.store(data.tweets);
            console.log('twitter data:', data.tweets);

        });
    // twitterData.getTwitterData()
    // .then(function(data) {
    //     console.log('twitter data: ', data);

    //     $scope.twitterData = data;

    // });


}])

.controller('homeController', ['$scope', '$sce', function($scope) {

    // $scope.headerIsTransparent = true;
    $scope.fadeout = true;

    $scope.obaSliderHome = {
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: false,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        dots: true
    };

    $scope.initSlider = function() {
        var slider = angular.element( document.querySelector( '#home-page-slider' ) );
        slider.slick('slickPlay');
    };

    // $scope.intoken = <?php echo $token;?>;
    // console.log('token is', intoken);

    // move to
    // function that initializes the slider when  slider is in-view
    // $scope.initSlider = function() {

    // };

    // Merch Images
    $scope.merchImg = [
        'img/merch/Black and White Oba Flip.jpg',
        'img/merch/black gold flip shirt.jpg',
        'img/merch/green black flip shirt.jpg',
        'img/merch/navy green flip shirt.jpg',
        'img/merch/keep calm shirt black.jpg',
        'img/merch/keep calm shirt navy.jpg',
        'img/merch/keep calm black gold sweatshirt.jpg',
        'img/merch/keep calm gold.jpg',
        'img/merch/oba jersey black green.jpg',
        'img/merch/oba jersey seahawks colors.jpg',
        'img/merch/oba jersey white.jpg',
        'img/merch/Oba shout gold shirt.jpg',
        'img/merch/Oba shout navy sweatshirt.jpg',
        'img/merch/OM9 navy black and green shirt.jpg',
        'img/merch/OM9 navy green shirt.jpg',
        'img/merch/OM9 navy green sweat shirt.jpg'
    ];

    // News Stories
    // create an $http get/promise that obtains the new json object
    // Or create a single global service that supplied data to the home page and the new page
    $scope.news = [
   {
        "title"     : "Obafemi Martins signs with Chinese Super League Giant, Shanghai Shenhua"
    ,   "image"     : "img/news/news-022516.jpg"
    ,   "date"      : "02.25.16"
    ,   "content"   : "The Seattle Sounders announced Thursday that Obafemi Martins has been officially transferred to Chinese Super League side Shanghai Greenland Shenhua FC. Martins, who said farewell to the Sounders faithful via Twitter one week ago, spent two seasons in Seattle, scoring 40 goals in 72 appearances."
    ,   "link"      : "http://www.soundersfc.com/post/2016/02/25/obafemi-martins-transfered-shanghai-greenland-shenhua"
    },
    {
        "title"     : "FC Dallas wins penalty shootout to end Seattle's playoff run"
    ,   "image"     : "img/news/news-110815.jpg"
    ,   "date"      : "11.8.15"
    ,   "content"   : "FRISCO, Texas – Walker Zimmerman scored the game-winning penalty kick as FC Dallas defeated the Seattle Sounders 4-2 in a penalty-kick shootout in Leg 2 of the MLS Western Conference semifinals on Sunday night at Toyota Stadium."
    ,   "link"      : "http://www.seattletimes.com/sports/sounders/first-impressions-fc-dallas-defeats-sounders-in-penalty-kick-shootout/"
    }
,   {
        "title"     : "Obafemi Martins called to National Team Duty"
    ,   "image"     : "img/news/news-110515.jpg"
    ,   "date"      : "11.5.15"
    ,   "content"   : "Obafemi Martins called up by Nigeria head coach Sunday Oliseh for World Cup Qualifiers."
    ,   "link"      : "http://www.espnfc.us/blog/football-nigeria/206/post/2699517/obafemi-martins-nigeria-recall-spurred-by-mls-success"
    }
,   {
        "title"     : "Obafemi Martins' goal-scoring efficiency never been done before in MLS"
    ,   "image"     : "img/news/news-100115.jpg"
    ,   "date"      : "10.1.15"
    ,   "content"   : "In 2015, the Nigerian goal machine has proven to be the most efficient attacker in MLS. In just 18 appearances, his 14 goals ranks tied for sixth in the league. Meanwhile, his shot attempts don't even crack among the top 50 players. To put this in perspective, there are five players in MLS who have two or fewer goals on 40 or more shots. Martins' 14 goals have come on 38 shots."
    ,   "link"      : "http://www.soundersfc.com/post/2015/09/30/obafemi-martins%E2%80%99-goal-scoring-efficiency-never-been-done-mls"
    }


    ];

    $scope.sectionInView = function(index, inview, inviewpart, event) {
        console.log(index, inview, inviewpart, event);
    };

    //TODO: create a directive for instagram
    //$scope.slider = angular.element( document.querySelector( '#oba-instagram' ) );
    //slider.pongstgrm({});
}])

.controller('meetController', function($scope) {
    $scope.title = 'Meet Oba';

    $scope.obaSliderMeet = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 3,
        lazyLoad: 'none',
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    $scope.meetImg = [
        'img/meet/slideshow/image-1-min.jpg'
    ,   'img/meet/slideshow/image-2-min.jpg'
    ,   'img/meet/slideshow/image-3-min.jpg'
    ,   'img/meet/slideshow/image-4-min.jpg'
    ,   'img/meet/slideshow/image-5-min.jpg'
    ,   'img/meet/slideshow/image-6-min.jpg'
    ];
})

.controller('gearController', function($scope) {
    $scope.title = 'Shop Gear';
})

// Article controller withing the newsController
.controller('newsController', ['$scope', 'articleService', 'angularGridInstance',
    function ($scope, articleService, angularGridInstance) {

    // page title
    $scope.title = 'Oba News';

    articleService.getArticles().then(function(data) {
        console.log('articleService loading article data', data);

        $scope.articles = data;

        // link is also used in the home view
        // TODO: refactor by creating a service
        $scope.linker = function(link) {
            window.open(link.link, '_blank');
        };

        // $scope.refresh = function() {
        //     angularGridInstance.gallery.refresh();
        //     console.log('grid refreshed');
        // };
        // $scope.refresh();

    });
}])

.controller('interactController', ['$scope', '$rootScope', 'dataService', 'twitterData', function($scope, $rootScope, dataService, twitterData) {
    $scope.title = 'Interact';

    // videos
    $scope.videos = [
        'QQqAchBJuT8'
    ,   'kOO3oq4kri0'
    ,   '3nspyBxndEc'
    ,   'ZRZSEBP_9IM'
    ,   'L4V0142Roa0'
    ]

    $scope.playerVars = {
        showinfo: 0
    ,   modestbranding: 1
    }

    twitterData.getTwitterData()
        .then(function(data) {
            $scope.inttweets = data.tweets;
            $scope.twitter_json_ready = true;
            //debugger;
        });

    // $scope.inTweetsReady = dataService.getBool();
    // $scope.inTweets = dataService.getData();
}])

.controller('parallaxController', function($scope) {})

.controller('footerController', function($scope) {})

// Contact form module
// TODO: move this to a seperate file
.controller('contactController', function ($scope) {

    $scope.imgOba = 'img/contact/oba-form-min.png';
    $scope.imgX = 'img/theme/x.svg';
})

.controller('formController', function ($scope, $http) {
    $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (var d in data){
            if (data.hasOwnProperty(d)) {
               returnString += d + '=' + data[d] + '&';
            }
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       //$scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.errorName = false;
       $scope.errorEmail = false;
       $scope.errorTextarea = false;
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
});





