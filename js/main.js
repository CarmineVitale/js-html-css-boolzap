$(document).ready(function () {


   var clone;
   var nuovoMex = $('input.input');
   var icon = $('.chat-footer i.fas');
   var search = $('#search-input');


//Seleziono chat da vedere con click su contatto
$('.contacts').click(function () { 
   var user = $(this).attr('data-conversazione');
    //resetto classe active
$('.chat-intera').removeClass('active');

$('.chat-intera[data-conversazione= "' + user + '" ]').addClass('active');

 //Cambio nome e immagine nell'header della conversazione
 //fase di lettura 
   var nomeCont = $(this).find('h4').text();
   var fotoCont = $(this).find('img.user').attr('src');
   
   //fase di scrittura
   $('.main-header').find('h4').text(nomeCont);
   $('.main-header').find('img.user').attr('src', fotoCont);
});



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

//Cercare tra i contatti della chat  
search.keyup(function () {
   var valoreSearch = search.val().toLowerCase().trim();
    $('.contacts').each( function() {
      var nomeContatto = $(this).find('.user-chat h4').text().toLowerCase();

      //Verifica input con nomi contatti
      if (nomeContatto.includes(valoreSearch)) {
         $(this).show();
      } else {
         $(this).hide();
      }
    });
   
})

//Opzioni dropdown menu su messaggio


$('.fa-angle-down').click( function() {

   $(this).next('.dropdown').toggle();
   

});

//cancellazione messaggio 
$('a.delete').click( function() {
   $(this).parents('.message').remove();
   
});


/******************************************* 
Funzioni 
*****************************************/
//Aggiunta messaggio in chat

  function aggiungiChat() { 

   clone = $('.template .message').clone();
   var textMex = nuovoMex.val();
   if (textMex.length > 0) {
      clone.find('p').text(textMex);

   var orario = oraAttuale();
   
   
   clone.find('span').text(orario);
   
   clone.addClass('green');

   $('.chat-intera.active').append(clone);
   nuovoMex.val('');

   setTimeout(bot, 1000);
   scrollChat();
   }
   
   
  }; 



  //Aggiunta risposta automatica
function bot() {
   clone =  $('.template .message').clone();
   var botMex = 'Ok';
   
   var orario = oraAttuale();
 
   clone.find('p').text(botMex);
   clone.find('span').text(orario);
   clone.addClass('white');
   $('.chat-intera.active').append(clone)
 
};

  // Ora attuale 
  function oraAttuale() {
   var data = new Date();
   var ora = aggiungiZero(data.getHours());
   var minuti = aggiungiZero(data.getMinutes());
   return  ora + ':' + minuti;
  
  }

  //aggiunta dello zero per minuti inferiori a 10
function aggiungiZero(num) {
   if (num < 10) {
      num = '0' + num;
   }
   return num;
};
  //scroll messaggio dopo inserimento
  function scrollChat() {

   var pixelScroll = $('.chat-intera.active').height();

   // $('.chat').scrollTop(pixelScroll);

   //render smooth l'operazione
   
   $('.chat').animate({
      scrollTop: pixelScroll
   }, 1000) 

  }




}); //<----End Ready




