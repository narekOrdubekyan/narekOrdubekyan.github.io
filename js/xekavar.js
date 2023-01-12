

////slider

$(document).ready(function(){

$(".slider").slick({
    arrows:true, //սլաքները միացնել անջատել
    dots:true,// տակի կետիկները
    adaptiveHeight:true,     // ավտոմատ բարձրությունը դզումա {աշխատումա . slick-track{aling-items:flex-start} ակտիվացնելուց հետո }
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
  





//line1
//for the director
     let directorLine1 = document.querySelector(".input_director_line1").value;
    document.querySelector(".result_polo_director_line1").innerHTML = Number(directorLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line1").innerHTML = Number(directorLine1) + " " + "հատ";
    document.querySelector(".result_costume_director_line1").innerHTML = Math.floor(directorLine1/3) + " " + "հատ";
















    document.querySelector(".button_result").onclick = myClick;
    function myClick(){

      //line1
//for the director
     let directorLine1 = document.querySelector(".input_director_line1").value;
    document.querySelector(".result_polo_director_line1").innerHTML = Number(directorLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line1").innerHTML = Number(directorLine1) + " " + "հատ";
    document.querySelector(".result_costume_director_line1").innerHTML = Math.floor(directorLine1/3) + " " + "հատ";
        


    };




/*A jQuery plugin which add loading indicators into buttons*/

(function ($) {
    $.fn.buttonLoader = function (action) {
        var self = $(this);
        if (action == 'start') {
            if ($(self).attr("disabled") == "disabled") {
                e.preventDefault();
            }
            $('.has-spinner').attr("disabled", "disabled");
            $(self).attr('data-btn-text', $(self).text());
            $(self).html('<span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>Loading');
            $(self).addClass('active');
        }
        if (action == 'stop') {
            $(self).html($(self).attr('data-btn-text'));
            $(self).removeClass('active');
            $('.has-spinner').removeAttr("disabled");
        }
    }
})(jQuery);

$(document).ready(function () {

    $('.has-spinner').click(function () {
        var btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 1000);
    });
});

///////////////////////////////////////////////////////////////////
