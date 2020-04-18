$(document).ready(function () {


   var clone;
   var nuovoMex = $('input.input');


   $('input.input').focus(function () { 
      
      $('.fa-microphone').toggleClass('fa-paper-plane');
       
   })
   
$('body').on('keyup', nuovoMex, function(e){
   if (e.keyCode == 13) {

      clone = $('.template .message').clone();
      var textMex = nuovoMex.val();
      clone.find('p').text(textMex);
      
      $('.chat').append(clone);
      nuovoMex.val('');
   }
});
$('body').on('click', '.fa-paper-plane', function(e){
   

      clone = $('.template .message').clone();
      var textMex = nuovoMex.val();
      clone.find('p').text(textMex);
      
      $('.chat').append(clone);
      nuovoMex.val('');
   
});





  
  
  
  
  
  




}); //<----End Ready