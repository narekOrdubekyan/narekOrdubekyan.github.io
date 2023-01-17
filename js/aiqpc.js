



//line1
//for engineer

     let engineerLine1 = document.querySelector(".input_engineer_line1").value;
     document.querySelector(".result_costume_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line1").innerHTML = Number(engineerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = Number(engineerLine1) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line1").innerHTML = Math.floor(engineerLine1/5) + " " + "հատ տղ. համար";
    
     
  //for woman engineer  
let  woman_engineerLine1 = document.querySelector(".input_woman_engineer_line1").value;
   document.querySelector(".result_polo_woman_engineer_line1").innerHTML = Number(woman_engineerLine1*2) + " " + "հատ";
   document.querySelector(".result_pants_woman_engineer_line1").innerHTML = Number(woman_engineerLine1) + " " + "հատ";
    document.querySelector(".result_costume_woman_engineer_line1").innerHTML = Math.floor(woman_engineerLine1/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line1").innerHTML = Math.floor(woman_engineerLine1/5) + " " + "հատ կնոջ համար";
    
    




//line2
//for the director
     let directorLine2 = document.querySelector(".input_director_line2").value;
    document.querySelector(".result_polo_director_line2").innerHTML = Number(directorLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line2").innerHTML = Number(directorLine2) + " " + "հատ";
    document.querySelector(".result_costume_director_line2").innerHTML = Math.floor(directorLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line2").innerHTML = Math.floor(directorLine2/5) + " " + "հատ";
  
  


//line3
let directorLine3 = document.querySelector(".input_director_line3").value;
   document.querySelector(".result_costume_director_line3").innerHTML = Math.floor(directorLine3/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line3").innerHTML = Math.floor(directorLine3/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line3").innerHTML = Number(directorLine3*2) + " " + "հատ";
   document.querySelector(".result_pants_director_line3").innerHTML = Number(directorLine3) + " " + "հատ";





//result jacket
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine1) + Number(woman_engineerLine1) + Number(directorLine2)+ Number(directorLine3) )/5) +" " + " հատ ";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine1*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML=  Number(woman_engineerLine1*2)+ " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine1) + " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine1) + " " + " հատ կին. ճարտ.";

// result costume woman engineer
document.querySelector(".general_result_costume_woman_engineer").innerHTML= Math.floor(woman_engineerLine1/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine1/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor((Number(directorLine2) + Number(directorLine3))/3)  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine2*2) + Number(directorLine3*2)  + " " + " հատ";
//result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine2) + Number(directorLine3)  + " " + " հատ";








    document.querySelector(".button_result").onclick = myClick;
    function myClick(){
        
//line1
//for engineer

     let engineerLine1 = document.querySelector(".input_engineer_line1").value;
     document.querySelector(".result_costume_engineer_line1").innerHTML = Math.floor(engineerLine1/3) + " " + "հատ";
     document.querySelector(".result_polo_engineer_line1").innerHTML = Number(engineerLine1*2) + " " + "հատ";
    document.querySelector(".result_pants_engineer_line1").innerHTML = Number(engineerLine1) + " " + "հատ";
     document.querySelector(".result_jacket_engineer_line1").innerHTML = Math.floor(engineerLine1/5) + " " + "հատ տղ. համար";
    
     
  //for woman engineer  
let  woman_engineerLine1 = document.querySelector(".input_woman_engineer_line1").value;
   document.querySelector(".result_polo_woman_engineer_line1").innerHTML = Number(woman_engineerLine1*2) + " " + "հատ";
   document.querySelector(".result_pants_woman_engineer_line1").innerHTML = Number(woman_engineerLine1) + " " + "հատ";
    document.querySelector(".result_costume_woman_engineer_line1").innerHTML = Math.floor(woman_engineerLine1/3) + " " + "հատ";
    document.querySelector(".result_jacket_woman_engineer_line1").innerHTML = Math.floor(woman_engineerLine1/5) + " " + "հատ կնոջ համար";
    
    




//line2
//for the director
     let directorLine2 = document.querySelector(".input_director_line2").value;
    document.querySelector(".result_polo_director_line2").innerHTML = Number(directorLine2*2) + " " + "հատ";
    document.querySelector(".result_pants_director_line2").innerHTML = Number(directorLine2) + " " + "հատ";
    document.querySelector(".result_costume_director_line2").innerHTML = Math.floor(directorLine2/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line2").innerHTML = Math.floor(directorLine2/5) + " " + "հատ";
  
  


//line3
let directorLine3 = document.querySelector(".input_director_line3").value;
   document.querySelector(".result_costume_director_line3").innerHTML = Math.floor(directorLine3/3) + " " + "հատ";
    document.querySelector(".result_jacket_director_line3").innerHTML = Math.floor(directorLine3/5) + " " + "հատ";
    document.querySelector(".result_polo_director_line3").innerHTML = Number(directorLine3*2) + " " + "հատ";
   document.querySelector(".result_pants_director_line3").innerHTML = Number(directorLine3) + " " + "հատ";





//result jacket
document.querySelector(".general_result_jacket_engineer").innerHTML= Math.floor((Number(engineerLine1) + Number(woman_engineerLine1) + Number(directorLine2)+ Number(directorLine3) )/5) +" " + " հատ ";

//result polo engineer
document.querySelector(".general_result_polo_engineer").innerHTML= Number(engineerLine1*2) + " " + " հատ ճարտ. համ.";
//result polo woman enginner
document.querySelector(".general_result_polo_woman_engineer").innerHTML=  Number(woman_engineerLine1*2)+ " " + " հատ կին. ճարտ.";
//result pants engineer
document.querySelector(".general_result_pants_engineer").innerHTML= Number(engineerLine1) + " " + " հատ ճարտ. համ.";
//result pants woman engineer
document.querySelector(".general_result_pants_woman_engineer").innerHTML= Number(woman_engineerLine1) + " " + " հատ կին. ճարտ.";

// result costume woman engineer
document.querySelector(".general_result_costume_woman_engineer").innerHTML= Math.floor(woman_engineerLine1/3) + " " + " հատ";

 // result costume engineer
 document.querySelector(".general_result_costume_engineer").innerHTML= Math.floor(engineerLine1/3) + " " + " հատ";

// result costume director
document.querySelector(".general_result_costume_director").innerHTML= Math.floor((Number(directorLine2) + Number(directorLine3))/3)  + " " + " հատ";

//result polo director
document.querySelector(".general_result_polo_director").innerHTML= Number(directorLine2*2) + Number(directorLine3*2)  + " " + " հատ";
//result pants director
document.querySelector(".general_result_pants_director").innerHTML= Number(directorLine2) + Number(directorLine3)  + " " + " հատ";





    };





