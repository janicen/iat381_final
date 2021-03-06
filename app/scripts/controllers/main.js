'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope, $window, $log) {
    $scope.awesomeThings = [];

  });

$(document).ready(function() { 
 	
	var scrollCounter = 0;

	$(window).on('scroll',function(){
		
		if( ($(window).scrollTop() + $(window).height() >= $(document).height()-3) && scrollCounter != 3) {

			switch(scrollCounter) {
				case 0 :
	 				feed.options.tagName = 'iat381fooddunbar';
	       			feed.options.limit = 7;
			       	feed.options.after = function () {

			       		var i = 10,
							j = 10,
							k = 10;

			       		var images = $("#instafeed").find('a');
				    	$.each(images, function(index, image) {
				    		if(index >= 10) {
					      		var delay = (index * 75) + 'ms';
					      		$(image).css('-webkit-animation-delay', delay);
					      		$(image).css('-moz-animation-delay', delay);
					      		$(image).css('-ms-animation-delay', delay);
					      		$(image).css('-o-animation-delay', delay);
					      		$(image).css('animation-delay', delay);
					      		$(image).addClass('wow zoomIn');
					      		
					      		//store data in js sessions
					      		var el = image;
								var imageSrc = el.getElementsByTagName( 'img' );
								var caption = el.getElementsByClassName( 'title' );
					      		sessvars.myObj[i++] = imageSrc[0].src;
					      		sessvars.myCaption[j++] = caption[0].innerText;
					      		sessvars.myID[k++] = index;
					      	}
				    	});

				    	for(var i = 11; i <= 18; i++){
				    		var childSelector = "#instafeed a:nth-child(" + i + ")";
				    		$(childSelector).addClass('wow zoomIn further1');
				    		var descChildSelector = childSelector + " div:nth-child(2)";
				    		$(descChildSelector).css("background","#ED1C24");
				    	}
				    	setLink(); //hacky way to reassign the new links to all a tag
				  	};
			       	feed.run();
			       	scrollCounter++;
			       	break;
			    case 1 :
	 				feed.options.tagName = 'iat381foodubc';
	       			feed.options.limit = 7;
			       	feed.options.after = function () {

			       		var i = 18,
							j = 18,
							k = 18;

			       		var images = $("#instafeed").find('a');
				    	$.each(images, function(index, image) {
				    		if(index >= 18) {
					      		var delay = (index * 75) + 'ms';
					      		$(image).css('-webkit-animation-delay', delay);
					      		$(image).css('-moz-animation-delay', delay);
					      		$(image).css('-ms-animation-delay', delay);
					      		$(image).css('-o-animation-delay', delay);
					      		$(image).css('animation-delay', delay);
					      		$(image).addClass('wow zoomIn');
					      		
					      		//store data in js sessions
					      		var el = image;
								var imageSrc = el.getElementsByTagName( 'img' );
								var caption = el.getElementsByClassName( 'title' );
					      		sessvars.myObj[i++] = imageSrc[0].src;
					      		sessvars.myCaption[j++] = caption[0].innerText;
					      		sessvars.myID[k++] = index;
					      	}
				    	});

				    	for(var i = 19; i <= 26; i++){
				    		var childSelector = "#instafeed a:nth-child(" + i + ")";
				    		$(childSelector).addClass('wow zoomIn further2');
				    		var descChildSelector = childSelector + " div:nth-child(2)";
				    		$(descChildSelector).css("background","#C1272D");
				    	}
				    	setLink(); //hacky way to reassign the new links to all a tag
				  	};
			       	feed.run();
			       	scrollCounter++;
			       	break;
			    case 2 :
	 				feed.options.tagName = 'iat381foodkerrisdale';
	       			feed.options.limit = 7;
			       	feed.options.after = function () {

			       		var i = 26,
							j = 26,
							k = 26;

			       		var images = $("#instafeed").find('a');
				    	$.each(images, function(index, image) {
				    		if(index >= 26) {
					      		var delay = (index * 75) + 'ms';
					      		$(image).css('-webkit-animation-delay', delay);
					      		$(image).css('-moz-animation-delay', delay);
					      		$(image).css('-ms-animation-delay', delay);
					      		$(image).css('-o-animation-delay', delay);
					      		$(image).css('animation-delay', delay);
					      		$(image).addClass('wow zoomIn');
					      		
					      		//store data in js sessions
					      		var el = image;
								var imageSrc = el.getElementsByTagName( 'img' );
								var caption = el.getElementsByClassName( 'title' );
					      		sessvars.myObj[i++] = imageSrc[0].src;
					      		sessvars.myCaption[j++] = caption[0].innerText;
					      		sessvars.myID[k++] = index;
					      	}
				    	});

				    	for(var i = 27; i <= 34; i++){
				    		var childSelector = "#instafeed a:nth-child(" + i + ")";
				    		$(childSelector).addClass('wow zoomIn further3');
				    		var descChildSelector = childSelector + " div:nth-child(2)";
				    		$(descChildSelector).css("background","#603813");
				    	}
				    	setLink(); //hacky way to reassign the new links to all a tag
				  	};
			       	feed.run();
			       	scrollCounter++;
			       	break;
			}
	   	}
	});

});