$(document).ready(function () {


   var clone = $('.template p').clone();
   var nuovoMex = $('input.input');


nuovoMex.keyup(function (e) { 
   if (e.keyCode == 13) {

   
   var textMex = nuovoMex.val();
   $('p.ciao').text(textMex);
   
   $('.chat').append(clone);
   nuovoMex.val('');
}
});





  
  
  
  
  
  
   /*$('input.input').focus(function () { 
      
      $('.fa-microphone').toggleClass('fa-paper-plane');
       
   });*/
   




}); //<----End Ready