$(document).ready(function(){

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

    if(count === backgroundArray.length ){
      location.reload();
      count = 0;
    }
  }
  , 5000)
});