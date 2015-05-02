$(document).ready(function(){
  var urlArray = []
  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'foodporn',
      clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
      limit: 60,
      success: function(images){

        images.data.forEach(function(image){
          url = image.images.low_resolution.url;
        
          //only post unique images
          if( urlArray.indexOf(url) === -1 ){
            urlArray.push(url);
            $('#lol').prepend('<img src="'+ url + '"/>')
          }  
        });
        
      },
      mock: function(){
        return true
      }
  });

  setInterval(function(){
    feed.run()
  }, 10000);
 
  
    
});