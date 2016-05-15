// app.js

angular.module('obaApp', [
    'ui.router'
,   'ngAnimate'
,   'angular-parallax'
,   'ngResource'
,   'angularGrid' //github.com/s-yadav/angulargrid
,   'wu.masonry'
,   'ngSanitize'
,   'com.2fdevs.videogular'
,   'com.2fdevs.videogular.plugins.controls'
,   'com.2fdevs.videogular.plugins.overlayplay'
,   'com.2fdevs.videogular.plugins.poster'
,   'angular-inview'
,   'youtube-embed'
,   'pascalprecht.translate'
//,   'angular-carousel'
//,   'angular-responsive' // https://github.com/lavinjj/angular-responsive
//,   'angularVideoBg'
//,   'dynamicLayout'
//,   'zumba.angular-waypoints'
//,   'ui'
//,   'ngTranslate'
])

// obaApp.config(function ($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
// });

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // Home states and nested views
    .state('home', {
        url: '/home'
    ,   templateUrl: 'app/views/home.html'
    ,   controller: 'homeController'
    ,   cache: false
    })

    .state('home.list', {
        url: '/list'
    ,   templateUrl: 'home-list.html'
    ,   controller: function($scope) {
            $scope.items = ['item1', 'item2', 'item3'];
        }
    })

    .state('home.paragraph', {
        url: '/paragraph'
    ,   template: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    })

    .state('meet', {
        url: '/meet'
    ,   templateUrl: 'app/views/meet.html'
    ,   controller: 'meetController'
    ,   cache: false
    })

    .state('news', {
        url: '/news'
    ,   templateUrl: 'app/views/news.html'
    ,   controller: 'newsController'
    ,   cache: false
    })

    .state('gear', {
        url: '/gear'
    ,   templateUrl: 'app/views/gear.html'
    ,   controller: 'gearController'
    ,   cache: false
    })

    .state('interact', {
        url: '/interact'
    ,   templateUrl: 'app/views/interact.html'
    ,   controller: 'interactController'
    ,   cache: false
    });
})


.config(function($translateProvider) {
  $translateProvider.translations('en', {
    HEDAER_home: 'Home',
    HEADER_meet: 'Meet Oba',
    HEADER_gear: 'Oba Gear',
    HEADER_news: 'News',
    HEADER_interact: 'Interact',
    HEADER_contact: 'Contact',

    HOME_quote: '“Something I feel strongly about is challenging myself. I am excited to join Shanghai Shenhua and immediately compete for the league and cup title.”',

    HOME_slide1_1: 'Seattle Sounders Striker',
    HOME_slide1_2: 'Obafemi Martins',
    HOME_slide1_3: 'MLS MVP Runner-up 2014',

    HOME_slide2_1: 'Citizen of the World',
    HOME_slide2_2: 'Obafemi Martins',
    HOME_slide2_3: 'A road long traveled',

    HOME_slide3_1: 'Philanthropist',
    HOME_slide3_2: 'Obafemi Martins',
    HOME_slide3_3: 'A world beyond soccer',

    HOME_interact: 'Interact With Oba',

    MEET_stats: 'MLS Stats',
    MEET_starts: 'Starts',
    MEET_minutes: 'Minutes',
    MEET_goals: 'Goals',
    MEET_assists: 'Assists',
    MEET_1: 'Obafemi Akinwunmi Martins  or “Oba” as he is passionately called, was born in Lagos, Nigeria on October 28th, 1984. Growing up, Oba and the local boys could be found on the dusty streets, barefoot, playing football. Obsessed with the game, they would play before, after, and even on the way to school. Often times the boys would play in tight spaces where scoring was more challenging. It’s in these small sided games Oba developed his precision-play and his trademark flip celebration.',
    MEET_2: 'When Martins was fourteen years old, he was spotted playing in the streets by a local coach and he was invited to play for the local club FC Ebedei. Martins accepted, kicking off what would soon become a successful and legendary career for the Nigerian. He began playing on the youth team and within a matter of months, Martins was informed by his club that there was interest in Italy and that there were clubs who wanted to possibly sign him. With great difficulty, he left his parents at age fourteen to pursue his dreams in Italy.',
    MEET_3: 'Martins started playing with Reggiana in 2000 in the Serie C League, where his training intensified. Despite the new environment and being alone in Italy, he excelled on the field and soon had offers coming in from Serie A clubs Perugia and Inter Milan. Knowing little about the clubs, he followed an old friend from the Nigerian youth team and signed a contract with Milan in 2001.',
    MEET_4: 'Once he set foot in the San Siro stadium, he was struck by the caliber of the club and of its players. He was mentored by his new teammates such as Ronaldo and Christian Vieri and vowed to work hard to join their ranks. The hard work paid off. Martins was asked to start in a Champions League game and Martins scored, leading his team to a 2-0 victory over Bayer Leverkusen. A year later, he devastated Arsenal in the same competition with a 3-0 win.',
    MEET_5: 'During his time at Milan, he performed admirably, scoring 37 goals in 105 domestic games. It was here that Martins made a name for himself. Throughout his time in Italy, the fans enjoyed cheering that Martins was faster than the ball. But as the club grew, he decided to leave Italy for England and, in 2006, Glenn Roeder signed him to Newcastle.',
    MEET_6: 'Martins played three years at Newcastle, amassing an impressive 35 goals in 104 games. He then played a season with VfL Wolfsburg in Germany and three with Rubin Kazan in Russia. In 2012, Rubin Kazan won the Russian Cup, leaving Martins with his first trophy in Russia. He also played briefly with Birmingham City on loan in 2011, where he scored the winning goal in the 2011 Football League Cup Final against Arsenal.',
    MEET_7: 'In 2012, Oba left Russia to join Levante in Spain, where he maintained a strong season with 9 goals in 27 appearances. His strong form led his team to 4th place in the La Liga standings before his imminent departure for a new challenge in America. In March of 2013, Martins left Levante and was officially signed to Seattle Sounders FC.',
    MEET_8: 'Oba has enjoyed a consistent period of top-class form in MLS. He would receive a number of accolades including a club record for most goals in a season, a tied club record for most assists in a season, the MLS MVP runner-up, MLS Best Eleven, and the 2014 MLS Goal of the Year award. In light of his performances, he was also named an MLS All-Star in both 2014 & 2015. Currently, Martins is one of the most sensational players in MLS and has an electric reputation for scoring the unbelievable. However, his drive doesn’t stem from goals and personal accolades, but rather his hunger to deliver the city of Seattle its first MLS Cup.',

    INTERACT_1: 'Seattle Sounders FC forward Obafemi Martins sits down with Ross Fletcher to discuss his journey from Nigeria to the Emerald City, and playing for Inter Milan, Newcastle, Levante along the way.',
    INTERACT_2: 'Seattle Sounders FC forward Obafemi Martins sits down with Ross Fletcher to discuss his journey from Nigeria to the Emerald City, and playing for Inter Milan, Newcastle, Levante along the way.',
    INTERACT_3: 'GOAL: Obafemi Martins\' jaw-dropping golazo | Colorado Rapids vs. Seattle Sounders.',
    INTERACT_4: 'GOAL: Obafemi Martins spins and fires home | Seattle Sounders vs FC Dallas.',
    INTERACT_5: 'GOAL: Obafemi Martins with a beautiful turn and finish | Seattle Sounders vs Houston Dynamo.',

    FOOTER_links: 'Links',
    FOOTER_newsletter: 'newsletter',
    FOOTER_newsletter_text: 'Be the first to know everything about Obafemi Martins.',
    FOOTER_youremail: 'Your email',
    FOOTER_email: 'Email',

    FORM_name: 'Name',
    FORM_email: 'Email',
    FORM_message: 'Message',
    FORM_send: 'Send',
    FORM_sub: 'Subscribe',

    BTN_meetOba: 'Meet Oba',
    BTN_viewGear: 'View all gear',
    BTN_viewNews: 'View all news',
    BTN_interact: 'Interact',

    QT_1: 'img/meet/quotes/quote-1.svg',
    QT_2: 'img/meet/quotes/quote-2.svg',
    QT_3: 'img/meet/quotes/quote-3.svg',
    QT_4: 'img/meet/quotes/quote-4.svg',
    QT_5: 'img/meet/quotes/quote-5.svg',
    QT_6: 'img/meet/quotes/quote-6.svg'

  })
  .translations('ch', {
    HEADER_home: '主页',
    HEADER_meet: '会面Oba',
    HEADER_gear: '店',
    HEADER_news: '新闻',
    HEADER_interact: '互动',
    HEADER_contact: '联络',

    HOME_quote: '“我很喜欢挑战自己。很激动自己能加入上海申花，立刻为球队在中超打拼，赢得冠军。”',

    HOME_slide1_1: '西雅图海湾前锋',
    HOME_slide1_2: 'Obafemi Martins',
    HOME_slide1_3: 'MLS MVP 亚军 2014',

    HOME_slide2_1: '世界公民',
    HOME_slide2_2: 'Obafemi Martins',
    HOME_slide2_3: '一条路走过长',

    HOME_slide3_1: '慈善家',
    HOME_slide3_2: 'Obafemi Martins',
    HOME_slide3_3: '的世界足球之外',

    HOME_interact: '互动与 Oba',

    MEET_stats: 'MLS 统计',
    MEET_starts: '开头',
    MEET_minutes: '纪要',
    MEET_goals: '球门',
    MEET_assists: '帮助',
    MEET_1: 'ObafemiAkinwunmi Martins或者大家都热情的叫他“Oba”，于1984年10月28日出生于尼日利亚首都拉各斯。成长过程中，经常会发现Oba和当地男孩们在满是尘土的街上赤脚踢足球。孩子们为足球着迷，上学前，放学，甚至上学路上都有他们踢足球的身影。男孩们经常会在狭窄的场地踢球，这让进球变得更富有挑战。正是在这小小的对抗游戏中，Oba形成了精准的球技和他标志性的空翻庆祝方式。',
    MEET_2: '当Martins 14岁的时候，有人看到他在一位当地教练的指导下在街上踢球，而他也受邀加入FC Ebedei俱乐部。Martins接受了邀请，开始踢球并很快就成就了这个尼日利亚人成功、传奇式的职业生涯。他开始在青年队踢球，几个月后，俱乐部告诉Martins有意大利俱乐部对他感兴趣，并且可能与他签约。面对着巨大困难，他在14岁就离开了父母，去意大利追逐梦想。',
    MEET_3: '2000年，Martins开始为雷吉亚纳队在丙级联赛踢球，在这期间他加强了训练。虽然面对着新环境和独自一人在意大利，但他在球场上表现出色，很快就有甲级俱乐部佩鲁贾和国际米兰向他发出邀请。在对俱乐部知之甚少的情况下，他听从了一位尼日利亚青年队老友的建议，于2001年与国际米兰签约。',
    MEET_4: '踏入圣西罗球场后，国米俱乐部及球员的专业水准让他震惊。他接受了新队友，像罗纳尔多和克里斯蒂安•维耶里的指导，并立志努力踢球向他们看齐。努力终究会有收获。Martins获得了冠军联赛首发的机会并且进球了，领导球队2-0击败勒沃库森。一年后，他在同一场比赛中以3-0击败了阿森纳。 ',
    MEET_5: '在国米期间，他的表现令人称道，105场国内比赛中打进了37球。这就在这里，Martins成就了自己的美名。在意大利期间，球迷们都纷纷称道Martins跑得比球还快。但随着俱乐部的成长，他打算离开意大利前往英国；2006年，Glenn Roeder签约他加入了纽卡斯尔。',
    MEET_6: 'Martins在纽卡斯尔踢了三年，取得了104场比赛35球的成绩。然后，他为德国沃尔夫斯堡队踢了一个赛季，为俄罗斯红宝石俱乐部踢了三个赛季。2012年，红宝石俱乐部赢得了俄罗斯杯，将Martins和他的第一座奖杯留在了俄罗斯。2011年，他还为短暂的借调到伯明翰城队，2011年英格兰联赛杯决赛对阵阿森纳时，他踢进了制胜一球。 ',
    MEET_7: '2012年，Oba离开了俄罗斯加入了西班牙莱万特队，在这里他表现强劲，27次出场打进9球。他的强劲风格领导球队西甲排名上升到第四名，而后他随即离开前往美国寻求新的挑战。2013年3月，Martins离开莱万特，正式签约西雅图海湾人队。',
    MEET_8: 'Oba在足球大联盟中一直拥有顶级竞技状态。他荣获了大量赞誉，像赛季俱乐部最多进球记录、赛季俱乐部最多助攻记录、MLS MVP亚军、MLS最佳十一人以及2014年MLS年度进球奖。鉴于他的表现，他还获得了2014年和2015年MLS全明星提名。目前，Martins是MLS最具轰动性球员之一，拥有进不可能之球的美名。然而，他的动力并非来源于进球和个人荣誉，而是将西雅图推上美国足球大联盟杯冠军的迫切愿望。',

    INTERACT_1: '西雅图海湾人队前锋Obafemi Martins与Ross Fletcher一同就坐讨论他从尼日利亚前往翡翠城的行程，以及为国际米兰、纽卡斯尔、莱万特踢球的历史。',
    INTERACT_2: '西雅图海湾人队前锋Obafemi Martins与Ross Fletcher一同就坐讨论他从尼日利亚前往翡翠城的行程，以及为国际米兰、纽卡斯尔、莱万特踢球的历史。',
    INTERACT_3: '进球：Obafemi Martins令人瞠目结舌的进球 | 科罗拉多急流队 vs. 西雅图海湾人队',
    INTERACT_4: '进球：Obafemi Martins带球救急 | 西雅图海湾人队 vs达拉斯队。',
    INTERACT_5: '进球：Obafemi Martins漂亮转身，射门进球 | 西雅图海湾人队 vs 休斯敦迪纳摩队。',

    FOOTER_links: '链接',
    FOOTER_newsletter: '时事通讯',
    FOOTER_newsletter_text: '第一个来全面了解Obafemi Martins.',
    FOOTER_youremail: '你的邮箱',
    FOOTER_email: '邮件',

    FORM_name: '名称',
    FORM_email: '电子邮件',
    FORM_message: '信息',
    FORM_send: '发送',
    FORM_sub: '订阅',

    BTN_meetOba: '会面Oba',
    BTN_viewGear: '查看所有商品',
    BTN_viewNews: '查看所有新闻',
    BTN_interact: '相互作用',

    QT_1: 'img/meet/quotes/quote-1-ch.svg',
    QT_2: 'img/meet/quotes/quote-2-ch.svg',
    QT_3: 'img/meet/quotes/quote-3-ch.svg',
    QT_4: 'img/meet/quotes/quote-4-ch.svg',
    QT_5: 'img/meet/quotes/quote-5-ch.svg',
    QT_6: 'img/meet/quotes/quote-6-ch.svg'

  });
  $translateProvider.preferredLanguage('en');
})

// Global service for links
// TODO: Instead of using global scope rewrite the helpers below as services
.run(function($rootScope, $state) {
    $rootScope.linkMe = function(link) {
        if(['home', 'meet', 'gear', 'news', 'interact'].indexOf(link) >= 0) {
            console.log('navigate to ', link);
            $state.go(link);
        } else {
            console.log('take me offsite to ', link);
            window.open(link, '_blank');
        }
    }
})

// TODO: create a service that doesn't rely on the rootscope
// global variable for setting home page header transparent
// run(function($rootScope) {
//     $rootScope.headerIsTransparent = true;
// }).

// start each view at the top of the page
.run(function($rootScope, $anchorScroll){
  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    $anchorScroll();
  });
});


// .filter('xlat', ['$rootScope', function($rootScope) {
//   // The code here executes only once, during initialization.
//   // We'll return the actual filter function that's executed
//   // many times.
//   var tables = {
//     'en': { 'HEADLINE': 'First name:' },
//     'nl': { 'HEADLINE': 'Voornaam:' }
//   };
//   $rootScope.currentLanguage = 'en';
//   return function(label) {
//     // tables is a nested map; by first selecting the
//     // current language (kept in the $rootScope as a
//     // global variable), and selecting the label,
//     // we get the correct value.
//     return tables[$rootScope.currentLanguage][label];
//   };
// }]);




