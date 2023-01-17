

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
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Number(workerLine1) + " " + "զույգ տղ.";
    document.querySelector(".result_costume_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ.";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ.";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ տղ.";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ.";
    
//for woman worker
let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "զույգ կն.";
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն.";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/2) + " " + "հատ կն.";
    document.querySelector(".result_Gloves_line1").innerHTML = Number(woman_workerLine1*12) + Number(workerLine1*12)  + " " + "զույգ";
    document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն.";



//line2
   let workerLine2 = document.querySelector(".input_worker_line2").value;
    document.querySelector(".result_costume_worker_line2").innerHTML = Number(workerLine2) + " " + "հատ";
    document.querySelector(".result_jacket_worker_line2").innerHTML = Math.floor(workerLine2/2) + " " + "հատ";
    document.querySelector(".result_T-shirt_worker_line2").innerHTML = Number(workerLine2*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line2").innerHTML = Number(workerLine2) + " " + "հատ";

    
//line3
   let workerLine3 = document.querySelector(".input_worker_line3").value;

    document.querySelector(".result_shoes_worker_line3").innerHTML = Number(workerLine3) + " " + "զույգ";
    document.querySelector(".result_costume_worker_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_jacket_worker_line3").innerHTML = Math.floor(workerLine3/2) + " " + "հատ";
    document.querySelector(".result_T-shirt_worker_line3").innerHTML = Number(workerLine3*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_welder_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_welders_Gloves_line3").innerHTML = Number(workerLine3*12) + " " + "զույգ";
////////////////////////////

//line4
let engineerLine4 = document.querySelector(".input_engineer_line4").value;
     document.querySelector(".result_costume_engineer_line4").innerHTML = Math.floor(engineerLine4/2) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line4").innerHTML = Number(engineerLine4*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line4").innerHTML = Number(engineerLine4) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line4").innerHTML = Math.floor(engineerLine4/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line4").innerHTML = Math.floor(engineerLine4/3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    document.querySelector(".result_polo_woman_engineer_line4").innerHTML = Number(woman_engineerLine4*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line4").innerHTML = Number(woman_engineerLine4) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/2) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "զույգ տղ. համար";
    
     

//line5
//for the director
     let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/2) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "զույգ";
    
    


//line6
//for the director
let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line6").innerHTML = Number(directorLine6*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = Number(directorLine6) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + " հատ տղ.";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ կն.";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + Number(workerLine3) + " " + " զույգ բան. տղ.";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " զույգ բան. կն";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor( (Number(engineerLine4) + Number(woman_engineerLine4) + Number(directorLine5) ) /3) +" " + " զույգ ճարտ.";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor( (Number(workerLine1) + Number(woman_workerLine1) + Number(workerLine2) + Number(workerLine3) ) /2) + " " + "հատ բանվ․";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine4) + Number(woman_engineerLine4) + Number(directorLine5)) /3 + (Number(directorLine6)/5)) +" " + " հատ ճարտ.";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine4*2) + " " + " հատ";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_engineerLine4*2) + " " + " հատ";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine4) + " " + " հատ";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine4) + " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine1*2) + Number(workerLine2*2) + Number(workerLine3*2) + " " + "հատ";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + " հատ";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(woman_engineerLine4/2) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine4/2) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor((Number(directorLine5)) /2 + (Number(directorLine6) )/3) +" " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine5*2) + Number(directorLine6*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine5) + Number(directorLine6) +" "+ " հատ";

//result Gloves

document.querySelector(".general_result_Gloves_worker").innerHTML= Number(workerLine1*12) + Number(woman_workerLine1*12) + " " + " զույգ բանվ.";

//result costume summer woman worker
document.querySelector(".general_result_costume_summer_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ";


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
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Number(workerLine1) + " " + "զույգ տղ.";
    document.querySelector(".result_costume_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ.";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ.";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ տղ.";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ.";
    
//for woman worker
let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "զույգ կն.";
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն.";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/2) + " " + "հատ կն.";
    document.querySelector(".result_Gloves_line1").innerHTML = Number(woman_workerLine1*12) + Number(workerLine1*12)  + " " + "զույգ";
    document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ կն.";



//line2
   let workerLine2 = document.querySelector(".input_worker_line2").value;
    document.querySelector(".result_costume_worker_line2").innerHTML = Number(workerLine2) + " " + "հատ";
    document.querySelector(".result_jacket_worker_line2").innerHTML = Math.floor(workerLine2/2) + " " + "հատ";
    document.querySelector(".result_T-shirt_worker_line2").innerHTML = Number(workerLine2*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line2").innerHTML = Number(workerLine2) + " " + "հատ";

    
//line3
   let workerLine3 = document.querySelector(".input_worker_line3").value;

    document.querySelector(".result_shoes_worker_line3").innerHTML = Number(workerLine3) + " " + "զույգ";
    document.querySelector(".result_costume_worker_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_jacket_worker_line3").innerHTML = Math.floor(workerLine3/2) + " " + "հատ";
    document.querySelector(".result_T-shirt_worker_line3").innerHTML = Number(workerLine3*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_welder_line3").innerHTML = Number(workerLine3) + " " + "հատ";
    document.querySelector(".result_welders_Gloves_line3").innerHTML = Number(workerLine3*12) + " " + "զույգ";
////////////////////////////

//line4
let engineerLine4 = document.querySelector(".input_engineer_line4").value;
     document.querySelector(".result_costume_engineer_line4").innerHTML = Math.floor(engineerLine4/2) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line4").innerHTML = Number(engineerLine4*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line4").innerHTML = Number(engineerLine4) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line4").innerHTML = Math.floor(engineerLine4/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line4").innerHTML = Math.floor(engineerLine4/3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    document.querySelector(".result_polo_woman_engineer_line4").innerHTML = Number(woman_engineerLine4*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line4").innerHTML = Number(woman_engineerLine4) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/2) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "զույգ տղ. համար";
    
     

//line5
//for the director
     let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/2) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "զույգ";
    
    


//line6
//for the director
let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line6").innerHTML = Number(directorLine6*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = Number(directorLine6) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + " հատ տղ.";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ կն.";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + Number(workerLine3) + " " + " զույգ բան. տղ.";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " զույգ բան. կն";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor( (Number(engineerLine4) + Number(woman_engineerLine4) + Number(directorLine5) ) /3) +" " + " զույգ ճարտ.";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor( (Number(workerLine1) + Number(woman_workerLine1) + Number(workerLine2) + Number(workerLine3) ) /2) + " " + "հատ բանվ․";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine4) + Number(woman_engineerLine4) + Number(directorLine5)) /3 + (Number(directorLine6)/5)) +" " + " հատ ճարտ.";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine4*2) + " " + " հատ";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_engineerLine4*2) + " " + " հատ";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine4) + " " + " հատ";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine4) + " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine1*2) + Number(workerLine2*2) + Number(workerLine3*2) + " " + "հատ";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + " հատ";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(woman_engineerLine4/2) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine4/2) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor((Number(directorLine5)) /2 + (Number(directorLine6) )/3) +" " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine5*2) + Number(directorLine6*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine5) + Number(directorLine6) +" "+ " հատ";

//result Gloves

document.querySelector(".general_result_Gloves_worker").innerHTML= Number(workerLine1*12) + Number(woman_workerLine1*12) + " " + " զույգ բանվ.";

//result costume summer woman worker
document.querySelector(".general_result_costume_summer_woman_worker").innerHTML= Number(woman_workerLine1) + " " + " հատ";









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
