(function($){'use strict';
	var Nav = function (el) {
		var $a = $(el).children('li').children('a');
			$a.on('click',function (e) {
			if($(this).parent().hasClass("has_sub")) {
	        	e.preventDefault();
	      	}
	      	if(!$(this).hasClass('subdrop')){
	        if($(this).next('ul').hasClass('opened')){
	           $(this).next('ul').slideUp();
	           $(this).next('ul').removeClass('opened')
	        }else{
	           $(this).next('ul').slideDown();
	        }
	        $(this).addClass("subdrop");
		    }else if($(this).hasClass("subdrop")){
		        $(this).removeClass("subdrop");
		        $(this).next("ul").slideUp(350);
		    }  
		});
	}
	$.fn.nav=function(option){
		return this.each(function () {
			new Nav(this);
		})
	}
})(jQuery);