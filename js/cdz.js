




//line1
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Math.floor( Number(workerLine1/2)) + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = Math.floor( Number(workerLine1/2)) + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/3) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ";


//for woman worker
    let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/2)) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/2)) + " " + "զույգ կնոջ համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/3) + " " + "հատ կնոջ համար";
     document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ";


////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line2").innerHTML = Math.floor(engineerLine2/4) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)-0.3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/4) + " " + "հատ կնոջ համար";
     
//line3
//for woman engineer

    let  woman_engineerLine3 = document.querySelector(".input_woman_engineer_line3").value;
    document.querySelector(".result_polo_woman_engineer_line3").innerHTML = Number(woman_engineerLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line3").innerHTML = Math.floor(woman_engineerLine3/3) + " " + "հատ";
    
//line4
//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    
    document.querySelector(".result_costume_summer_woman_worker_line4").innerHTML= Number(woman_engineerLine4)+ " " + "հատ";
    document.querySelector(".result_bathrobe_woman_worker_line4").innerHTML= Number(woman_engineerLine4)+ " " + "հատ";




//line5
//for the director
     let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/4) + " " + "հատ";
    
    


//line6
//for the director
let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line6").innerHTML = Number(directorLine6*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = Number(directorLine6) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Math.floor(Number(workerLine1/2))  + " " + " հատ տղ. համար";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Math.floor(Number(woman_workerLine1/2))  + " " + " հատ կնոջ համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Math.floor(Number(workerLine1/2)) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Math.floor(Number(woman_workerLine1/2))  + " " + "զույգ կին բանվ.";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor(Number(engineerLine2/3)-0.3) +" " + " զույգ ճարտ․ համար";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(Number(workerLine1) + Number(woman_workerLine1))/3 + " " + " հատ բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine5)) /4 + (Number(directorLine6)/5)) +" " + " հատ ճարտ. համար ";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine2*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_engineerLine2*2) + Number(woman_engineerLine3*2)  + " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine2)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine2) + Number(woman_engineerLine3)  + " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine1*2) + " " + " հատ տղ. բանվ.";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine1) + " " + " հատ տղ. բանվ.";

//general result costume summer woman worker
document.querySelector(".general_result_costume_summer_woman_worker").innerHTML= Number(woman_workerLine1)+Number(woman_engineerLine4) + " " + " հատ";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor( (Number(woman_engineerLine2)+Number(woman_engineerLine3))/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine2/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( (Number(directorLine5)+Number(directorLine6))/3) + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine5*2) + Number(directorLine6*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine5) + Number(directorLine6) +" "+ " հատ";

//general result bathrobe woman worker
document.querySelector(".general_result_bathrobe_woman_worker").innerHTML= Number(woman_engineerLine4) + " " + " հատ";












    document.querySelector(".button_result").onclick = myClick;
    function myClick(){
        
//line1
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Math.floor( Number(workerLine1/2)) + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = Math.floor( Number(workerLine1/2)) + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/3) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ";


//for woman worker
    let woman_workerLine1 = document.querySelector(".input_woman_worker_line1").value;
    document.querySelector(".result_costume_winter_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/2)) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_worker_line1").innerHTML = Math.floor(Number(woman_workerLine1/2)) + " " + "զույգ կնոջ համար";
    document.querySelector(".result_jacket_woman_worker_line1").innerHTML = Math.floor(woman_workerLine1/3) + " " + "հատ կնոջ համար";
     document.querySelector(".result_costume_summer_woman_worker_line1").innerHTML = Number(woman_workerLine1) + " " + "հատ";


////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line2").innerHTML = Math.floor(engineerLine2/4) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(Number(engineerLine2/3)-0.3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/4) + " " + "հատ կնոջ համար";
     
//line3
//for woman engineer

    let  woman_engineerLine3 = document.querySelector(".input_woman_engineer_line3").value;
    document.querySelector(".result_polo_woman_engineer_line3").innerHTML = Number(woman_engineerLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line3").innerHTML = Math.floor(woman_engineerLine3/3) + " " + "հատ";
    
//line4
//for woman engineer

    let  woman_engineerLine4 = document.querySelector(".input_woman_engineer_line4").value;
    
    document.querySelector(".result_costume_summer_woman_worker_line4").innerHTML= Number(woman_engineerLine4)+ " " + "հատ";
    document.querySelector(".result_bathrobe_woman_worker_line4").innerHTML= Number(woman_engineerLine4)+ " " + "հատ";




//line5
//for the director
     let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/4) + " " + "հատ";
    
    


//line6
//for the director
let directorLine6 = document.querySelector(".input_director_line6").value;
    document.querySelector(".result_costume_director_line6").innerHTML = Math.floor(directorLine6/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line6").innerHTML = Math.floor(directorLine6/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line6").innerHTML = Number(directorLine6*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line6").innerHTML = Number(directorLine6) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Math.floor(Number(workerLine1/2))  + " " + " հատ տղ. համար";
document.querySelector(".general_result_costume_winter_woman_worker").innerHTML= Math.floor(Number(woman_workerLine1/2))  + " " + " հատ կնոջ համար";

//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Math.floor(Number(workerLine1/2)) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_woman_worker").innerHTML= Math.floor(Number(woman_workerLine1/2))  + " " + "զույգ կին բանվ.";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor(Number(engineerLine2/3)-0.3) +" " + " զույգ ճարտ․ համար";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(Number(workerLine1) + Number(woman_workerLine1))/3 + " " + " հատ բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine5)) /4 + (Number(directorLine6)/5)) +" " + " հատ ճարտ. համար ";


//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine2*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML= Number(woman_engineerLine2*2) + Number(woman_engineerLine3*2)  + " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine2)+ " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine2) + Number(woman_engineerLine3)  + " " + " հատ կին. ճարտ.";

//result T-T-shirt worker
document.querySelector(".general_result_Tshirt_worker").innerHTML= Number(workerLine1*2) + " " + " հատ տղ. բանվ.";

// result overalls
document.querySelector(".general_result_overalls_worker").innerHTML= Number(workerLine1) + " " + " հատ տղ. բանվ.";

//general result costume summer woman worker
document.querySelector(".general_result_costume_summer_woman_worker").innerHTML= Number(woman_workerLine1)+Number(woman_engineerLine4) + " " + " հատ";


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor( (Number(woman_engineerLine2)+Number(woman_engineerLine3))/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine2/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( (Number(directorLine5)+Number(directorLine6))/3) + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine5*2) + Number(directorLine6*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine5) + Number(directorLine6) +" "+ " հատ";

//general result bathrobe woman worker
document.querySelector(".general_result_bathrobe_woman_worker").innerHTML= Number(woman_engineerLine4) + " " + " հատ";

let result_woman =" ";
result_woman= +woman_workerLine1 + +woman_engineerLine2 + +woman_engineerLine3 + +woman_engineerLine4;

document.querySelector(".result_woman").innerHTML=result_woman+" "+ "կին";

let result_man=" ";
result_man= +workerLine1+ +engineerLine2 + +directorLine5 + +directorLine6;
document.querySelector(".result_man").innerHTML=result_man+" "+ "տղամարդ"


    };



///////////////////////////////////////////////////////////////////


let result_woman =" ";
result_woman= +woman_workerLine1 + +woman_engineerLine2 + +woman_engineerLine3 + +woman_engineerLine4;

document.querySelector(".result_woman").innerHTML=result_woman+" "+ "կին";

let result_man=" ";
result_man= +workerLine1+ +engineerLine2 + +directorLine5 + +directorLine6;
document.querySelector(".result_man").innerHTML=result_man+" "+ "տղամարդ";

