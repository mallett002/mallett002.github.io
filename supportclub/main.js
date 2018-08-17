$(document).ready(function(){
  $('#bars').on('click', function(){
    $(this).next('.mobile-ul').slideToggle(1000);
  });

  $('.step-info').on('click', function(){
    $(this).find('.learn-content').slideToggle(1000);
  });

  $('.initial').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.minnow').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.perch').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.big-tuna').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.shark').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.orca').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

  $('.whale').on('click', function(){
    $(this).next('.grid').slideToggle(1000);
    $(this).next('.grid').css({'display': 'grid'});
  });

/*weekly table wrapper*/

  $('.weekly-title').on('click', function(){
    $(this).next('.week-table').slideToggle(1000);
  });

  //Wide table
  $('.week-title-wide').on('click', function(){
    $(this).next('.wide-weekly-wrapper').slideToggle(1000);
  });

  //arrows in cards
  $('.step-info').on('click', function(){
    $(this).find('.learn-icon').toggleClass('flipped');
  });

  //arrows in mobile table
  $('.level').on('click', function(){
    $(this).find('.caret-wrapper').toggleClass('flipped');
  });

});


