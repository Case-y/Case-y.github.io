var app = angular.module('WikiApp', ['ngAnimate']);

app.controller('MainCtrl', function($scope, $http, $timeout) {
  var form = $('form');
  var close = $('.eks');
  var input = $('input');
  var search = $("#search");
  var help = $("#help");
  
  close.on('click', function() {
    form.toggleClass('open');
    
    if (!form.hasClass('open') && $scope.searchTxt !== '' && typeof $scope.searchTxt !== 'undefined') {
        search.toggleClass('fullHeight')
      help.toggleClass('hide');
      $scope.searchTxt = '';
    } 
    $scope.results = [];
    $scope.$apply();
  })
  
  input.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
    if (form.hasClass('open')) {
      input.focus();
    } else {
      return;
    }
  })
  
  $scope.results = [];
  
  $scope.search = function() {
    $scope.results = [];
    help.addClass('hide');
    search.removeClass('fullHeight');
    var title = input.val();
    var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    var page = 'http://en.wikipedia.org/?curid=';
    
    $http.jsonp(api + title + cb)
    .success(function(data) {
      if (data.query == undefined) {
        alert("System.out.printLNFUCK");
        $scope.results.push({title: "No results.", body: "Please search again.", page: ""})
      } else {
      var results = data.query.pages;
      angular.forEach(results, function(v,k)  {
        $scope.results.push({title: v.title, body: v.extract, page: page + v.pageid})
      })
      }
     
    });
  } 
});