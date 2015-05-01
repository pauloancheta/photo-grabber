$(document).ready(function(){
  $('.instagram_image').on('click', function() {
    var           str = $(this).attr('style'),
          first_index = str.indexOf( "('" ) + 2,
         second_index = str.indexOf( "')" );

    var background = "url(' " + str.substring(first_index, second_index) + " ')"

    $('.jumbotron').css('background', background + " no-repeat")
  });

  var backgroundArray = [],
                count = 0;
  for(var i = 0; i < $('.instagram_image').length; i+= 1){
    var       str = $('.instagram_image').eq(i).attr('style'),
      first_index = str.indexOf( "('" ) + 2,
     second_index = str.indexOf( "')" );

    backgroundArray.push("url(' " + str.substring(first_index, second_index) + " ')")
  }

  setInterval(function() {
    $('.jumbotron').css('background', backgroundArray[count] + " no-repeat")
    count+= 1
  }
  , 5000)
});