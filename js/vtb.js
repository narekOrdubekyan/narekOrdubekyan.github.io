

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
//for woman worker
   let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;

    
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն. համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/3)) + " " + "հատ կն. համար";
    document.querySelector(".result_Gloves_line1").innerHTML= Number(woman_workerLine1*24);
    document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն. համար";
    document.querySelector(".result_polo_woman_worker_line1").innerHTML = Number(woman_workerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ";




////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)) + " " + "հատ տղ. համար";
    

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ ";
    document.querySelector(".result_shoes_woman_engineer_line2").innerHTML = Math.floor(Number(woman_engineerLine2/3)) + " " + "հատ կն. համար";

//line3
//for the director
     let directorLine3 = document.querySelector(".input_director_line3").value;
    document.querySelector(".result_polo_director_line3").innerHTML = Number(directorLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line3").innerHTML = Number(directorLine3) + " " + "հատ";
    document.querySelector(".result_costume_director_line3").innerHTML = Math.floor(directorLine3/3) + " " + "հատ";
   
    





// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ կն. համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Math.floor( (Number(engineerLine2) + Number(woman_engineerLine2) ) /3) +" " + " զույգ ճարտ. համար ";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(Number(woman_workerLine1/3)) + " " + " հատ բանվ.";


//result gloves
document.querySelector(".general_result_gloves_worker").innerHTML= Number(woman_workerLine1*24) +  " " + " զույգ բանվ. համ.";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine2*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_workerLine1*2)+Number(woman_engineerLine2*2) + " " + " հատ կին. բանվ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine2)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_workerLine1)+Number(woman_engineerLine2) + " " + " հատ կին. բանվ.";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(Number(woman_engineerLine2/3)) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(Number(engineerLine2/3)) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( Number(directorLine3/3) ) +" " + " հատ ճարտ. համար ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine3*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine3) +" "+ " հատ";

//result_costume_summer_woman_worker
document.querySelector(".general_result_costume_summer_woman_worker").innerHTML = Number(woman_workerLine1) +" "+ " հատ";

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
//for woman worker
   let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;

    
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն. համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/3)) + " " + "հատ կն. համար";
    document.querySelector(".result_Gloves_line1").innerHTML= Number(woman_workerLine1*24);
    document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն. համար";
    document.querySelector(".result_polo_woman_worker_line1").innerHTML = Number(woman_workerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ";




////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)) + " " + "հատ տղ. համար";
    

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ ";
    document.querySelector(".result_shoes_woman_engineer_line2").innerHTML = Math.floor(Number(woman_engineerLine2/3)) + " " + "հատ կն. համար";

//line3
//for the director
     let directorLine3 = document.querySelector(".input_director_line3").value;
    document.querySelector(".result_polo_director_line3").innerHTML = Number(directorLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line3").innerHTML = Number(directorLine3) + " " + "հատ";
    document.querySelector(".result_costume_director_line3").innerHTML = Math.floor(directorLine3/3) + " " + "հատ";
   
    





// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ կն. համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Math.floor( (Number(engineerLine2) + Number(woman_engineerLine2) ) /3) +" " + " զույգ ճարտ. համար ";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(Number(woman_workerLine1/3)) + " " + " հատ բանվ.";


//result gloves
document.querySelector(".general_result_gloves_worker").innerHTML= Number(woman_workerLine1*24) +  " " + " զույգ բանվ. համ.";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine2*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_workerLine1*2)+Number(woman_engineerLine2*2) + " " + " հատ կին. բանվ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine2)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_workerLine1)+Number(woman_engineerLine2) + " " + " հատ կին. բանվ.";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(Number(woman_engineerLine2/3)) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(Number(engineerLine2/3)) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( Number(directorLine3/3) ) +" " + " հատ ճարտ. համար ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine3*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine3) +" "+ " հատ";



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
