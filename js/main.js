$(document).ready(function () {


   var clone;
   var nuovoMex = $('input.input');
   var icon = $('.chat-footer i.fas');

   //Cambio icona da microfono a "send"
   $('input.input').focus(function () { 
      
      icon.toggleClass('fa-microphone fa-paper-plane');
       
   }).blur(function () { 
      
      icon.toggleClass('fa-microphone fa-paper-plane');
       
   });
   
  
   //Invio messaggio alla pressione del tasto INVIA

nuovoMex.keyup(function (e) { 
   if (e.keyCode == 13) {
      aggiungiChat()
   }
});
   //Invio messaggio al click dell'icona "send"

$('.chat-footer i.fas').click(function (e) { 
   aggiungiChat();
   
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
   
   clone.addClass('green');

   $('.chat-intera.active').append(clone);
   nuovoMex.val('');

   setTimeout(bot, 1000);
   
  }; 

//aggiunta dello zero per minuti inferiori a 10
function aggiungiZero(num) {
   if (num < 10) {
      num = '0' + num;
   }
   return num;
};
  
function bot() {
   clone =  $('.template .message').clone();
   var botMex = 'Ok';
   var data = new Date();
   var ora = aggiungiZero(data.getHours());
   var minuti = aggiungiZero(data.getMinutes());
   var orario = ora + ':' + minuti;
 
   clone.find('p').text(botMex);
   clone.find('span').text(orario);
   clone.addClass('white');
   $('.chat-intera.active').append(clone)
 
};
  
  




}); //<----End Ready