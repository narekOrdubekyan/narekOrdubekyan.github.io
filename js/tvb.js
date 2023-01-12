

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
//for engineer

     let engineerLine1 = document.querySelector(".input_engineer_line1").value;
     document.querySelector(".result_costume_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line1").innerHTML = Number(engineerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = Number(engineerLine1) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ տղ. համար";
    document.querySelector(".result_shoes_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "զույգ տղ. համար";
     document.querySelector(".result_Gloves_line1").innerHTML= Number(engineerLine1*12) ;
 
    

//line3
let directorLine2 = document.querySelector(".input_director_line2").value;
   document.querySelector(".result_costume_director_line2").innerHTML = Math.floor(directorLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line2").innerHTML = Math.floor(directorLine2/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line2").innerHTML = Number(directorLine2*2) + " " + "հատ";
   document.querySelector(".result_pants_director_line2").innerHTML = Number(directorLine2) + " " + "հատ";




// general resilt

document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor (Number(engineerLine1/3))  +" " + " զույգ ճարտ․ համար";

//result jacket


document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine1)) /3 + (Number(directorLine2)/5)) +" " + " հատ  ";

//result gloves

document.querySelector(".general_result_gloves_engineer").innerHTML= Math.floor (Number(engineerLine1*12))  +" " + " զույգ ճարտ․ համար";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine1*2) + " " + " հատ ճարտ. համ.";

//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine1) + " " + " հատ ճարտ. համ.";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine1/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor(Number(directorLine2/3))  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine2*2) + " " + " հատ";
//result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine2)   + " " + " հատ";




function myFunction() {
  var x = document.getElementById("wraper_card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}





    document.querySelector(".button_result").onclick = myClick;
    function myClick(){
        
//line1
//for engineer

     let engineerLine1 = document.querySelector(".input_engineer_line1").value;
     document.querySelector(".result_costume_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line1").innerHTML = Number(engineerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = Number(engineerLine1) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ տղ. համար";
    document.querySelector(".result_shoes_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "զույգ տղ. համար";
     document.querySelector(".result_Gloves_line1").innerHTML= Number(engineerLine1*12) ;
 
    

//line3
let directorLine2 = document.querySelector(".input_director_line2").value;
   document.querySelector(".result_costume_director_line2").innerHTML = Math.floor(directorLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line2").innerHTML = Math.floor(directorLine2/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line2").innerHTML = Number(directorLine2*2) + " " + "հատ";
   document.querySelector(".result_pants_director_line2").innerHTML = Number(directorLine2) + " " + "հատ";




// general resilt

document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor (Number(engineerLine1/3))  +" " + " զույգ ճարտ․ համար";

//result jacket


document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine1)) /3 + (Number(directorLine2)/5)) +" " + " հատ  ";

//result gloves

document.querySelector(".general_result_gloves_engineer").innerHTML= Math.floor (Number(engineerLine1*12))  +" " + " զույգ ճարտ․ համար";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine1*2) + " " + " հատ ճարտ. համ.";

//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine1) + " " + " հատ ճարտ. համ.";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine1/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor(Number(directorLine2/3))  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine2*2) + " " + " հատ";
//result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine2)   + " " + " հատ";

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
