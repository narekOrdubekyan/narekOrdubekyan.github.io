



//line1
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Number(workerLine1) + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ";
    document.querySelector(".result_Gloves_line1").innerHTML = Number(workerLine1*12) + " " + "հատ";



////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "զույգ տղ. համար";
    document.querySelector(".result_Gloves_line2").innerHTML = Number(engineerLine2*12) + Number(woman_engineerLine2*12)  + " " + "հատ";
     
//line3
//for woman engineer

    let  woman_engineerLine3 = document.querySelector(".input_woman_engineer_line3").value;
    document.querySelector(".result_polo_woman_engineer_line3").innerHTML = Number(woman_engineerLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    document.querySelector(".result_bathrobe_woman_worker_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    




//line4
//for the director
     let directorLine4 = document.querySelector(".input_director_line4").value;
    document.querySelector(".result_polo_director_line4").innerHTML = Number(directorLine4*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line4").innerHTML = Number(directorLine4) + " " + "հատ";
    document.querySelector(".result_costume_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    
    


//line5
//for the director
let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + " " + " հատ տղ. համար";


//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor( (Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine4) ) /3) +" " + " զույգ ճարտ. համար ";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(workerLine1/2)  + " " + " հատ բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine4)) /3 + (Number(directorLine5)/5)) +" " + " հատ ճարտ. համար ";


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


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(woman_engineerLine2/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine2/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( (Number(directorLine4)+Number(directorLine5))/3) + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine4*2) + Number(directorLine5*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine4) + Number(directorLine5) +" "+ " հատ";

//general result bathrobe woman worker
document.querySelector(".general_result_bathrobe_woman_worker").innerHTML= Number(woman_engineerLine3) + " " + " հատ";

//general_result_Gloves

document.querySelector(".general_result_Gloves_worker").innerHTML= Number(workerLine1*12) + " " + " զույգ բանվ. համար";
document.querySelector(".general_result_Gloves_engineer").innerHTML= Number(engineerLine2*12) + Number(woman_engineerLine2*12)  + " " + " զույգ ճարտ. ";










    document.querySelector(".button_result").onclick = myClick;
    function myClick(){
        
//line1
   let workerLine1 = document.querySelector(".input_worker_line1").value;

    document.querySelector(".result_shoes_worker_line1").innerHTML = Number(workerLine1) + " " + "զույգ տղ. համար";
    document.querySelector(".result_costume_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ տղ. համար";
    document.querySelector(".result_jacket_worker_line1").innerHTML = Math.floor(workerLine1/2) + " " + "հատ տղ. համար";
    document.querySelector(".result_T-shirt_worker_line1").innerHTML = Number(workerLine1*2) + " " + "հատ";
    document.querySelector(".result_overalls_worker_line1").innerHTML = Number(workerLine1) + " " + "հատ";
    document.querySelector(".result_Gloves_line1").innerHTML = Number(workerLine1*12) + " " + "հատ";



////////////////////////////

//line2
let engineerLine2 = document.querySelector(".input_engineer_line2").value;
     document.querySelector(".result_costume_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line2").innerHTML = Number(engineerLine2*2) + " " + "հատ";
     document.querySelector(".result_pants_engineer_line2").innerHTML = Number(engineerLine2) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "հատ տղ. համար";
     document.querySelector(".result_shoes_engineer_line2").innerHTML = Math.floor(engineerLine2/3) + " " + "զույգ տղ. համար";
     

//for woman engineer

    let  woman_engineerLine2 = document.querySelector(".input_woman_engineer_line2").value;
    document.querySelector(".result_polo_woman_engineer_line2").innerHTML = Number(woman_engineerLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line2").innerHTML = Number(woman_engineerLine2) + " " + "հատ";
    document.querySelector(".result_costume_winter_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "հատ կնոջ համար";
    document.querySelector(".result_shoes_woman_engineer_line2").innerHTML = Math.floor(woman_engineerLine2/3) + " " + "զույգ տղ. համար";
    document.querySelector(".result_Gloves_line2").innerHTML = Number(engineerLine2*12) + Number(woman_engineerLine2*12)  + " " + "հատ";
     
//line3
//for woman engineer

    let  woman_engineerLine3 = document.querySelector(".input_woman_engineer_line3").value;
    document.querySelector(".result_polo_woman_engineer_line3").innerHTML = Number(woman_engineerLine3*2) + " " + "հատ";
    document.querySelector(".result_pants_woman_engineer_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    document.querySelector(".result_bathrobe_woman_worker_line3").innerHTML = Number(woman_engineerLine3) + " " + "հատ";
    




//line4
//for the director
     let directorLine4 = document.querySelector(".input_director_line4").value;
    document.querySelector(".result_polo_director_line4").innerHTML = Number(directorLine4*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line4").innerHTML = Number(directorLine4) + " " + "հատ";
    document.querySelector(".result_costume_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    document.querySelector(".result_shoes_director_line4").innerHTML = Math.floor(directorLine4/3) + " " + "հատ";
    
    


//line5
//for the director
let directorLine5 = document.querySelector(".input_director_line5").value;
    document.querySelector(".result_costume_director_line5").innerHTML = Math.floor(directorLine5/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line5").innerHTML = Math.floor(directorLine5/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line5").innerHTML = Number(directorLine5*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line5").innerHTML = Number(directorLine5) + " " + "հատ";



// general resilt
//resultt costume
document.querySelector(".general_result_costume_worker").innerHTML= Number(workerLine1) + " " + " հատ տղ. համար";


//result shoes
document.querySelector(".general_result_shoes_worker").innerHTML= Number(workerLine1) + " " + "զույգ տղ.բանվ․";
document.querySelector(".general_result_shoes_engineer").innerHTML= Math.floor( (Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine4) ) /3) +" " + " զույգ ճարտ. համար ";

//result jacket

document.querySelector(".general_result_jacket_worker").innerHTML= Math.floor(workerLine1/2)  + " " + " հատ բանվ.";
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine2) + Number(woman_engineerLine2) + Number(directorLine4)) /3 + (Number(directorLine5)/5)) +" " + " հատ ճարտ. համար ";


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


// general result costume winter woman engineer
document.querySelector(".general_result_costume_winter_woman_engineer").innerHTML= Math.floor(woman_engineerLine2/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine2/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor( (Number(directorLine4)+Number(directorLine5))/3) + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine4*2) + Number(directorLine5*2)  + " " + " հատ";

// result pants director 

document.querySelector(".general_result_pants_director").innerHTML = Number(directorLine4) + Number(directorLine5) +" "+ " հատ";

//general result bathrobe woman worker
document.querySelector(".general_result_bathrobe_woman_worker").innerHTML= Number(woman_engineerLine3) + " " + " հատ";

//general_result_Gloves

document.querySelector(".general_result_Gloves_worker").innerHTML= Number(workerLine1*12) + " " + " զույգ բանվ. համար";
document.querySelector(".general_result_Gloves_engineer").innerHTML= Number(engineerLine2*12) + Number(woman_engineerLine2*12)  + " " + " զույգ ճարտ. ";


    };


