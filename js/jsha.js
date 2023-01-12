

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

    document.querySelector(".result_shoes_worker_line1").innerHTML = workerLine1 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = workerLine1 + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_polo_engineer_line1").innerHTML = workerLine1*2 + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = workerLine1 + " " + "հատ";
//for woman worker
    let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = woman_workerLine1 + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = woman_workerLine1 + " " + "զույգ կնոջ համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/2) + " " + "հատ կնոջ համար";
    document.querySelector(".result_Gloves_line1").innerHTML= (Number(workerLine1) + Number(woman_workerLine1))*12;
    document.querySelector(".result_polo_woman_engineer_line1").innerHTML = woman_workerLine1*2 + " " + "հատ";
     document.querySelector(".result_pants_woman_engineer_line1").innerHTML = woman_workerLine1 + " " + "հատ";



////////////////////////////

//line2
let workerLine2 = document.querySelector(".input_worker_line2").value;

    document.querySelector(".result_shoes_worker_line2").innerHTML = workerLine2 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line2").innerHTML = workerLine2 + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line2").innerHTML = Math.floor(workerLine2/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line2").innerHTML = workerLine2*2 + " " + "հատ";
    document.querySelector(".result_overalls_worker_line2").innerHTML = workerLine2 + " " + "հատ";
    document.querySelector(".result_Gloves_line2").innerHTML= Number(workerLine2*12);









// line3
let workerLine3 = document.querySelector(".input_worker_line3").value;

    document.querySelector(".result_shoes_worker_line3").innerHTML = workerLine3 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line3").innerHTML = workerLine3 + " " + "հատ տղ. համար";
    document.querySelector(".result_welder_line3").innerHTML = workerLine3 + " " + "հատ";
    document.querySelector(".result_welders_Gloves_line3").innerHTML = workerLine3*12 + " " + "զույգ";
    document.querySelector(".result_Gloves_line3").innerHTML = workerLine3*6 + " " + "զույգ";
    document.querySelector(".result_jacket_worker_line3").innerHTML = Math.floor(workerLine3/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line3").innerHTML = workerLine3*2 + " " + "հատ";
    document.querySelector(".result_overalls_worker_line3").innerHTML = workerLine3 + " " + "հատ";




   //line4

//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    document.querySelector(".result_polo_woman_engineer_line4").innerHTML = woman_engineerLine4*2 + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line4").innerHTML = woman_engineerLine4 + " " + "հատ";
    document.querySelector(".result_costume_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/5) + " " + "հատ կնոջ համար";



//line5
//for engineer

     let engineerLine5 = document.querySelector(".input_engineer_line5").value;
     document.querySelector(".result_costume_engineer_line5").innerHTML = Math.floor(engineerLine5/2) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line5").innerHTML = engineerLine5*2 + " " + "հատ";
     document.querySelector(".result_pants_engineer_line5").innerHTML = engineerLine5 + " " + "հատ";

     document.querySelector(".result_jacket_engineer_line5").innerHTML = Math.floor(engineerLine5/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line5").innerHTML = Math.floor(engineerLine5/3) + " " + "զույգ տղ. համար";
     document.querySelector(".result_Gloves_line5").innerHTML = engineerLine5*12 + " " + "զույգ";


//line6
//for the director
     let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_polo_director_line6").innerHTML = directorLine6*2 + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = directorLine6 + " " + "հատ";
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/2) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "զույգ";
    document.querySelector(".result_Gloves_line6").innerHTML = directorLine6*6 + " " + "զույգ";


//line7
let directorLine7 = document.querySelector(".input_director_line7").value;
    document.querySelector(".result_costume_director_line7").innerHTML = Math.floor(directorLine7/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line7").innerHTML = Math.floor(directorLine7/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line7").innerHTML = Number(directorLine7*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line7").innerHTML = Number(directorLine7) + " " + "հատ";


// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3)+ " " + " հատ տղ. համար";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Number(woman_workerLine1)  + " " + " հատ կնոջ համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Number(woman_workerLine1)  + " " + "զույգ կին բանվ.";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor(engineerLine5/3)+Math.floor(directorLine6/3) +" " + " զույգ ճարտ․ համար";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Number(workerLine1/2) + Number(workerLine2/2) + Number(workerLine3/2)+ " " + " հատ տղ. բանվ.";
document.querySelector(".general_result_jacket_woman_worker").innerHTML= Math.floor(woman_workerLine1/2)  + " " + " հատ կին բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor(woman_engineerLine4/5) + Math.floor(engineerLine5/3) + Math.floor(directorLine6/3)+Math.floor(directorLine7/5) + " " + " հատ ճարտ․ համար";

//result gloves
document.querySelector(".general_result_gloves_worker").innerHTML= Number(workerLine1*12) + Number(workerLine2*12) + Number(workerLine3*6)+ Number(woman_workerLine1*12) +  " " + " զույգ բանվ. համ.";
document.querySelector(".general_result_gloves_engineer").innerHTML= Number(engineerLine5*12) + Number(directorLine6*6) + " " + " զույգ ճարտ. համ.";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(workerLine1*2) + Number(engineerLine5*2)+ " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_workerLine1*2) + Number(woman_engineerLine4*2)+ " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(workerLine1) + Number(engineerLine5)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_workerLine1) + Number(woman_engineerLine4)+ " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine2*2) + Number(workerLine3*2) + " " + " հատ տղ. բանվ.";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine2) + Number(workerLine3) + " " + " հատ տղ. բանվ.";



//result costume welder
document.querySelector(".general_result_costume_welder").innerHTML= Number(workerLine3) + " " + " հատ";

//result  welder gloves
document.querySelector(".general_result_welders_Gloves").innerHTML= Number(workerLine3*12) + " " + " զույգ";

// result costume woman engineer
document.querySelector(".general_result_costume_woman_engineer").innerHTML= Math.floor(woman_engineerLine4/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine5/2) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor(directorLine6/2) + Math.floor(directorLine7/3)  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= (directorLine6*2) + (directorLine7*2)  + " " + " հատ";

// result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine6) + Number(directorLine7)  + " " + " հատ";




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

    document.querySelector(".result_shoes_worker_line1").innerHTML = workerLine1 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = workerLine1 + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_polo_engineer_line1").innerHTML = workerLine1*2 + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = workerLine1 + " " + "հատ";
//for woman worker
    let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = woman_workerLine1 + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = woman_workerLine1 + " " + "զույգ կնոջ համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/2) + " " + "հատ կնոջ համար";
    document.querySelector(".result_Gloves_line1").innerHTML= (Number(workerLine1) + Number(woman_workerLine1))*12;
    document.querySelector(".result_polo_woman_engineer_line1").innerHTML = woman_workerLine1*2 + " " + "հատ";
     document.querySelector(".result_pants_woman_engineer_line1").innerHTML = woman_workerLine1 + " " + "հատ";



////////////////////////////

//line2
let workerLine2 = document.querySelector(".input_worker_line2").value;

    document.querySelector(".result_shoes_worker_line2").innerHTML = workerLine2 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line2").innerHTML = workerLine2 + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line2").innerHTML = Math.floor(workerLine2/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line2").innerHTML = workerLine2*2 + " " + "հատ";
    document.querySelector(".result_overalls_worker_line2").innerHTML = workerLine2 + " " + "հատ";
    document.querySelector(".result_Gloves_line2").innerHTML= Number(workerLine2*12);









// line3
let workerLine3 = document.querySelector(".input_worker_line3").value;

    document.querySelector(".result_shoes_worker_line3").innerHTML = workerLine3 + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line3").innerHTML = workerLine3 + " " + "հատ տղ. համար";
    document.querySelector(".result_welder_line3").innerHTML = workerLine3 + " " + "հատ";
    document.querySelector(".result_welders_Gloves_line3").innerHTML = workerLine3*12 + " " + "զույգ";
    document.querySelector(".result_Gloves_line3").innerHTML = workerLine3*6 + " " + "զույգ";
    document.querySelector(".result_jacket_worker_line3").innerHTML = Math.floor(workerLine3/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line3").innerHTML = workerLine3*2 + " " + "հատ";
    document.querySelector(".result_overalls_worker_line3").innerHTML = workerLine3 + " " + "հատ";




   //line4

//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    document.querySelector(".result_polo_woman_engineer_line4").innerHTML = woman_engineerLine4*2 + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line4").innerHTML = woman_engineerLine4 + " " + "հատ";
    document.querySelector(".result_costume_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line4").innerHTML = Math.floor(woman_engineerLine4/5) + " " + "հատ կնոջ համար";



//line5
//for engineer

     let engineerLine5 = document.querySelector(".input_engineer_line5").value;
     document.querySelector(".result_costume_engineer_line5").innerHTML = Math.floor(engineerLine5/2) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line5").innerHTML = engineerLine5*2 + " " + "հատ";
     document.querySelector(".result_pants_engineer_line5").innerHTML = engineerLine5 + " " + "հատ";

     document.querySelector(".result_jacket_engineer_line5").innerHTML = Math.floor(engineerLine5/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line5").innerHTML = Math.floor(engineerLine5/3) + " " + "զույգ տղ. համար";
     document.querySelector(".result_Gloves_line5").innerHTML = engineerLine5*12 + " " + "զույգ";


//line6
//for the director
     let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_polo_director_line6").innerHTML = directorLine6*2 + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = directorLine6 + " " + "հատ";
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/2) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "զույգ";
    document.querySelector(".result_Gloves_line6").innerHTML = directorLine6*6 + " " + "զույգ";


//line7
let directorLine7 = document.querySelector(".input_director_line7").value;
    document.querySelector(".result_costume_director_line7").innerHTML = Math.floor(directorLine7/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line7").innerHTML = Math.floor(directorLine7/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line7").innerHTML = directorLine7*2 + " " + "հատ";
    document.querySelector(".result_pants_director_line7").innerHTML = directorLine7 + " " + "հատ";


// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3)+ " " + " հատ տղ. համար";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Number(woman_workerLine1)  + " " + " հատ կնոջ համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + Number(workerLine2) + Number(workerLine3) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Number(woman_workerLine1)  + " " + "զույգ կին բանվ.";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor(engineerLine5/3)+Math.floor(directorLine6/3) +" " + " զույգ ճարտ․ համար";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Number(workerLine1/2) + Number(workerLine2/2) + Number(workerLine3/2)+ " " + " հատ տղ. բանվ.";
document.querySelector(".general_result_jacket_woman_worker").innerHTML= Math.floor(woman_workerLine1/2)  + " " + " հատ կին բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor(woman_engineerLine4/5) + Math.floor(engineerLine5/3) + Math.floor(directorLine6/3)+Math.floor(directorLine7/5) + " " + " հատ ճարտ․ համար";

//result gloves
document.querySelector(".general_result_gloves_worker").innerHTML= Number(workerLine1*12) + Number(workerLine2*12) + Number(workerLine3*6)+ Number(woman_workerLine1*12) +  " " + " զույգ բանվ. համ.";
document.querySelector(".general_result_gloves_engineer").innerHTML= Number(engineerLine5*12) + Number(directorLine6*6) + " " + " զույգ ճարտ. համ.";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(workerLine1*2) + Number(engineerLine5*2)+ " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_workerLine1*2) + Number(woman_engineerLine4*2)+ " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(workerLine1) + Number(engineerLine5)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_workerLine1) + Number(woman_engineerLine4)+ " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine2*2) + Number(workerLine3*2) + " " + " հատ տղ. բանվ.";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine2) + Number(workerLine3) + " " + " հատ տղ. բանվ.";



//result costume welder
document.querySelector(".general_result_costume_welder").innerHTML= Number(workerLine3) + " " + " հատ";

//result  welder gloves
document.querySelector(".general_result_welders_Gloves").innerHTML= Number(workerLine3*12) + " " + " զույգ";

// result costume woman engineer
document.querySelector(".general_result_costume_woman_engineer").innerHTML= Math.floor(woman_engineerLine4/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine5/2) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor(directorLine6/2) + Math.floor(directorLine7/3)  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= (directorLine6*2) + (directorLine7*2)  + " " + " հատ";

// result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine6) + Number(directorLine7)  + " " + " հատ";




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
