var count = 0
function load(){
    var opt = document.querySelector('#note')
    document.getElementById('quiz').style.display ='block';
    document.getElementById('lef').style.visibility ='hidden';
    document.querySelector('#count').classList.add('cout');
    document.querySelector('#note').style.visibility= 'hidden';
    document.querySelector('.foot').style.top ='0px';

    var count = 300;
    var total_h = parseInt(count/3600);
    var total_min = parseInt(count/600);
    var total_sec =parseInt(count%60);

  var interval = setInterval(function(){
    count--;
    total_h = parseInt(count/3600);
    total_min =  parseInt(count/60);
    total_sec = parseInt(count%60);
  document.getElementById('count').innerHTML= total_min + 'm ' + total_sec + 's';

if ( count <= 60) {

    document.querySelector('#count').innerHTML = 'You have ' + total_sec + 's remaining'; 
} 
if (count === 0){
clearInterval(interval);
document.querySelector('#count').innerHTML='Time is up';

// if(window.matchMedia("(max-width:900px)").matches){
// document.querySelector('.foot').style.top= '600px';
// }
// else{
// document.querySelector('.foot').style.top= '600px';
// }
document.querySelector('#quiz').style.display='none';
document.getElementById('after-submit').innerHTML=Check().correct;
}
}, 1000);
// if(Check){
//   clearInterval(interval)
// }
}    

      function openBar(){
          document.getElementById('menu').style.width= '200px';
          document.getElementById('content').style.marginLeft='200px';
          document.getElementById('hide').style.visibility = 'hidden';
      }
      function closeBar(){
          document.getElementById('menu').style.width='0px';
          document.getElementById('content').style.marginLeft='0px';
          document.getElementById('hide').style.visibility = 'visible';
      }

      var anna = document.querySelector('#anna');
      var showAna = document.querySelector('#incor');

      function showAn(){
        anna.style.color= 'red';
        showAna.style.transform = 'scale(1)'
        showAna.style.padding = '18px';
        showAna.style.transition= '300ms ease-in-out';
        anna.innerHTML = "<span onclick = 'hideAn()'> Hide analysis <i class = 'fa fa-arrow-up '></i></span>";
      }
      
      function hideAn(){
        showAna.style.transform = 'scale(0)'
        anna.style.color= 'black';
        showAna.style.padding = '0px';
       
       Check().sAnna();
      }
    
      function relo(){
        var relod = document.querySelector('.rotate')
        relod.style.webkitAnimation = 'spin 5s linear'; 
        relod.style.mozAnimation = 'spin 5s linear';
        relod.style.oAnimation = 'spin 5s linear';
        relod.style.animation = 'spin 5s linear';
        relod.style.animationIterationCount = '8';
       }
      
  function Check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question18 = document.quiz.question18.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;

    var redo = document.querySelector('.reload');
    redo.innerHTML = "<a href = 'QandA.htm' onclick = 'relo()'>Redo Test <i class =' fa fa-redo-alt rotate'></i></a>";
    redo.style.padding = '10px';
    var logOut = document.querySelector('.log_out');
    logOut.innerHTML = "<a href = 'log.htm'>Logout <i class =' fa fa-sign-out-alt '></i></a>";
    logOut.style.padding = '10px';

   
function sAnna(){
    anna.innerHTML = "<span onClick = 'showAn()'> Show analysis <i class = 'fa fa-arrow-down '></i></span>";
  }    
  sAnna()
  anna.style.padding = "17px"
    var Anwr = ''
    var mainQue = ''
    var numm = ''
    
    function ansCor(){
      var corr = document.querySelector('#incor')
      corr.innerHTML += `<i class = 'fa fa-check' style = 'color: green'></i> &nbsp; ${numm}. Correct answer =  <span class = 'corr'><b>${Anwr}.</b></span>  &nbsp;   Answer picked = <b style = 'color: green'>${mainQue}.</b> <br>`;
      corr.classList.add('incor');
    }
    
    function ansIncor(){
      var corr = document.querySelector('#incor');
      corr.innerHTML += `<i class = 'fa fa-times' style = 'color: red'></i> &nbsp; ${numm}. Correct answer = <span class = 'icorr'><b>${Anwr}.</b></span>  &nbsp;  <i>Answer picked</i> = <b style = 'color: red'>${mainQue}</b> <br> `;
      corr.classList.add('incor');
    }
    var correct = 0;

    if (question1 == "Ibadan" ){
      correct++;
      var Anwr = "Ibadan";
      var mainQue = question1;
      var numm = 1
      ansCor()
      }
      else{
        if (question1 == ''){
          question1 = " <b>You Picked None</b>";
        }
       var Anwr = "Ibadan";
       var mainQue = question1;
       numm = 1
       ansIncor();
    }
   
    if(question2 == "Plateau"){
      correct++;
      var Anwr = "Plateau";
      var mainQue = question2;
      numm = 2
      ansCor();
    }
    else{
        if (question2 == ''){
          question2 = " <b>You Picked None</b>";
        }
       var Anwr = "Plateau";
       var mainQue = question2;
       numm = 2
       ansIncor();
    }
   
    if(question3 == "Albany"){
      correct++;
      var Anwr = "Albany";
      var mainQue = question3;
      numm = 3
      ansCor();
    }
    else{
        if (question3 == ''){
          question3 = " <b>You Picked None</b>";
        }
       var Anwr = "Albany";
       var mainQue = question3;
       numm = 3
       ansIncor();
    }
    if (question4 == "No"){
      correct++;
      var Anwr = "No";
      var mainQue = question4;
      numm = 4;
      ansCor();
    }
    else{
        if (question4 == ''){
          question4 = " <b>You Picked None</b>";
        }
       var Anwr = "No";
       var mainQue = question4;
       numm = 4
       ansIncor();
    }
    if (question5 == "Cascading Style Sheet"){
      correct++;
      var Anwr = "Cascading Style Sheet";
      var mainQue = question5;
      numm = 5
      ansCor();
    }
    else{
        if (question5 == ''){
          question5 = " <b>You Picked None</b>";
        }
       var Anwr = "Cascading Style Sheet";
       var mainQue = question5;
       numm = 5
       ansIncor();
    }
    if (question6 == "Turple"){
      correct++;
      var Anwr = "Turple";
      var mainQue = question6;
      numm = 6
      ansCor();
    }
    else{
        if (question6 == ''){
          question6 = " <b>You Picked None</b>";
        }
       var Anwr = "Turple";
       var mainQue = question6;
       numm = 6
       ansIncor();
    }
    if (question7 == "Array"){
      correct++;
      var Anwr = "Array";
      var mainQue = question7;
      numm = 7;
      ansCor();
    }
    else{
        if (question7 == ''){
          question7 = " <b>You Picked None</b>";
        }
       var Anwr = "Array";
       var mainQue = question7;
       numm = 7;
       ansIncor();
    }
    if (question8 == "Float"){
      correct++;
      var Anwr = "Float";
      var mainQue = question8;
      numm = 8;
      ansCor();
    }
    
    else{
        if (question8 == ''){
          question8 = " <b>You Picked None</b>";
        }
       var Anwr = "Float";
       var mainQue = question8;
       numm = 8;
       ansIncor();
    }
    if (question9 == "Brendan Eich"){
      correct++;
      var Anwr = "Brendan Eich";
      var mainQue = question9;
      numm = 9;
      ansCor();
    }
    else{
        if (question9 == ''){
          question9 = " <b>You Picked None</b>";
        }
       var Anwr = "Brendan Eich";
       var mainQue = question9;
       numm = 9;
       ansIncor();
    }
    
    if (question10 == "True"){
      correct++;
      var Anwr = "True";
      var mainQue = question10;
      numm = 10;
      ansCor();
    }
    else{
        if (question10 == ''){
          question10 = " <b>You Picked None</b>";
        }
       var Anwr = "True";
       var mainQue = question10;
       numm = 10;
       ansIncor();
    }
    
    if (question11 == "ECMAScript"){
      correct++;
      var Anwr = "ECMAScript";
      var mainQue = question11;
      numm = 11;
      ansCor();
    }
    else{
        if (question11 == ''){
          question11 = " <b>You Picked None</b>";
        }
       var Anwr = "ECMAScript";
       var mainQue = question11;
       numm = 11;
       ansIncor();
    }
    if (question12 == "function"){
      correct++;
      var Anwr = "function";
      var mainQue = question12;
      numm = 12;
      ansCor();
    }
    else{
        if (question12 == ''){
          question12 = " <b>You Picked None</b>";
        }
       var Anwr = "function";
       var mainQue = question12;
       numm = 12;
       ansIncor();
    }
    if (question13 == "Document Object Model"){
      correct++;
      var Anwr = "Document Object Model";
      var mainQue = question13;
      numm = 13;
      ansCor();
    }
    else{
        if (question13 == ''){
          question13 = " <b>You Picked None</b>";
        }
       var Anwr = "Document Object Model";
       var mainQue = question13;
       numm = 13;
       ansIncor();
    }
    if (question14 == "81"){
      correct++;
      var Anwr = "81";
      var mainQue = question14;
      numm = 14;
      ansCor();
    }
    else{
        if (question14 == ''){
          question14 = " <b>You Picked None</b>";
        }
       var Anwr = "81";
       var mainQue = question14;
       numm = 14;
       ansIncor();
    }
    if (question15 == "242"){
      correct++;
      var Anwr = "242";
      var mainQue = question15;
      numm = 15;
      ansCor();
    }
    else{
        if (question15 == ''){
          question15 = " <b>You Picked None</b>";
        }
       var Anwr = "242";
       var mainQue = question15;
       numm = 15;
       ansIncor();
    }
    if (question16 == "1995"){
      correct++;
      var Anwr = "1995";
      var mainQue = question16;
      numm = 16;
      ansCor();
    }
    else{
        if (question16 == ''){
          question16 = " <b>You Picked None</b>";
        }
       var Anwr = "1995";
       var mainQue = question16;
       numm = 16;
       ansIncor();
    }
    if (question17 == "FORTRAN"){
      correct++;
      var Anwr = "FORTRAN";
      var mainQue = question17;
      numm = 17;
      ansCor();
    }
    else{
        if (question17 == ''){
          question17 = " <b>You Picked None</b>";
        }
       var Anwr = "FORTRAN";
       var mainQue = question17;
       numm = 17;
       ansIncor();
    }
    if (question18 == "UI/UX"){
      correct++;
      var Anwr = "UI/UX";
      var mainQue = question18;
      numm = 18;
      ansCor();
    }
    else{
        if (question18 == ''){
          question18 = " <b>You Picked None</b>";
        }
       var Anwr = "UI/UX";
       var mainQue = question18;
       numm = 18;
       ansIncor();
    }
    if (question19 == "laravel"){
      correct++;
      var Anwr = "laravel";
      var mainQue = question19;
      numm = 19;
      ansCor();
    }
    else{
        if (question19 == ''){
          question19 = " <b>You Picked None</b>";
        }
       var Anwr = "laravel";
       var mainQue = question19;
       numm = 19;
       ansIncor();
    }
    if (question20 == "Personal Home Page"){
      correct++;
      var Anwr = "Personal Home Page";
      var mainQue = question20;
      numm = 20;
      ansCor();
    }
   
    else{
        if (question20 == ''){
          question20 = " <b>You Picked None</b>";
        }
       var Anwr = "Personal Home Page";
       var mainQue = question20;
       numm = 20;
       ansIncor();
    }
    
    // if (question20 !== "Personal Home Page"){
    //   document.getElementById('incorrect').innerHTML = question20;
    // }
    var message = [" <i class = 'fa fa-thumbs-up' style = 'color: green'> </i> Great Job","Not Good, keep on trying","Not bad fella, but you gat to do better","<i class = 'fa fa-thumbs-down' style = 'color: red'> </i> You really need to do better", "Good try, try harder next time", "you've done a good job"];
    var pics=["Win.GIF","lose.jpg","Win.GIF", "lose.jpg","lose.jpg"];
    var range;
    
    if (correct < 1){
      range= 3
    }
   if(correct == 1){
      range = 1
    }
   if (correct == 2){
      range =  1
    }
     if (correct == 3 ){
      range = 1 
    }
     if(correct == 4){
      range = 1
    }
     if (correct >= 5 || correct == 8){
      range = 4;
    }
     if (correct >= 8 || correct == 10){
      range = 2;
    }
    if (correct >= 10 % correct == 15){
      range = 5
    }
     if ( correct >= 15){
        range = 0
      }
    
      var count = 0
      document.getElementById("after-submit").style.visibility = "visible";
    document.getElementById("message").innerHTML=message[range];
    document.getElementById("number-correct").innerHTML = "You got " +"<b>" +correct+ "</b>"+ " correct.";
    document.getElementById("pics").src= pics[range];
    document.querySelector('#quiz').style.visibility = "hidden";
    document.querySelector('#count').remove();
    document.querySelector('#quiz').style.display='none';
      
  }
  