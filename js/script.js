$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});

////slider

$(document).ready(function(){

$(".slider").slick({
	arrows:true, //սլաքները միացնել անջատել
	dots:true,// տակի կետիկները
	adaptiveHeight:true,	 // ավտոմատ բարձրությունը դզումա {աշխատումա . slick-track{aling-items:flex-start} ակտիվացնելուց հետո }
	slidesToShow:1,// սլայդի քանակը: լայնութայն հետ փոփոխություն ա անում
	slidesToScroll:1, //քանի նկար ցույց տա թերթելուց
	speed:1000,
	easing:"ease",
	infinite:true, //defult true
	initialSlide:0,// startvi slaid
	autoplay:true,
	autoplaySpeed:4000,

});
	});

/////////////////////////////////////////

//window loader



  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 3000);
  }

////////////////////////////

function myFunction() {
  var x = document.getElementById("wraper_card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




        
   



///////////////////////////////////////////////////////////////////
 $(document).on('click', '[data-toggle="modal"]', function () {
      var target = $(this).attr('data-target');
      console.log(target);
      $(target).addClass('show');
      return false;
    });

    $('.modal .close').on('click', function () {
      $(this).closest('.modal').removeClass('show');
      return false;
    })