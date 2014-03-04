angular.module('peopleServices', ['ngResource'])
	.factory('People', function($resource){

		return $resource('/person');
	});
