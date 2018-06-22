$(document).ready(function(){
    $('#bars').on('click', function(){
      $(this).next('.mobile-ul').slideToggle(1000);
    });
});
