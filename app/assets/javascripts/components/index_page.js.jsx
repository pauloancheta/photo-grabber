var IndexPage = React.createClass({
  getInitialState: function() {
    return{urlArray: []}
  },

  componentWillMount: function(){
    var self = this;
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'mustang',
        clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
        limit: 8,
        success: function(images){
          url = images.data;
          self.setState({urlArray: url});
        },
        mock: function(){
          return true
        }
    });

    setInterval(function() {
      feed.run();  
    }, 5000)
    
  },


  render: function() {
    urlArrayElements = [];
    this.state.urlArray.forEach(function(url) {
      urlArrayElements.push(<img src={url.images.low_resolution.url} /> )
    });

    return(
      <div>
        <div className="heading">
          <h1>Hello World</h1>
        </div>

        <div className="image_feed">
          {urlArrayElements}
        </div>
      </div>
    );
  }
});
