$(document).ready(function () {


   var clone;
   var nuovoMex = $('input.input');

   //Cambio icona da microfono a "send"
   $('input.input').focus(function () { 
      
      $('.fa-microphone').toggleClass('fa-paper-plane');
       
   }).blur(function () { 
      
      $('.fa-microphone').toggleClass('fa-paper-plane');
       
   });
  
   //Invio messaggio alla pressione del tasto INVIA
$('body').on('keyup', nuovoMex, function(e){
   if (e.keyCode == 13) {
      aggiungiChat()
   }
});
   //Invio messaggio al click dell'icona "send"
$('body').on('click', '.chat-footer i.fas', function(e){
      aggiungiChat()
});



/******************************************* 
Funzioni 
*****************************************/
//Aggiunta messaggio in chat

  function aggiungiChat() { 

   clone = $('.template .message').clone();
   var textMex = nuovoMex.val();
   clone.find('p').text(textMex);

   var data = new Date();
   var ora = aggiungiZero(data.getHours());
   var minuti = aggiungiZero(data.getMinutes());
   var orario = ora + ':' + minuti;
   
   
   clone.find('span').text(orario);
   
   $('.chat').append(clone);
   nuovoMex.val('');
   }
   
   

//aggiunta dello zero per minuti inferiori a 10
function aggiungiZero(num) {
   if (num < 10) {
      num = '0' + num;
   }
   return num;
};
  
  
  
  




}); //<----End Ready