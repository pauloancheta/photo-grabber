var IndexPage = React.createClass({
  getInitialState: function() {
    return{urlArray: []}
  },

  componentWillMount: function(){
    var self = this;
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'foodporn',
        clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
        limit: 30,
        success: function(images){
          console.log(images.data)
          url = images.data;
          self.setState({urlArray: url});
        },
        mock: function(){
          return true
        }
    });

    feed.run();
  },


  render: function() {
    urlArrayElements = [];
    this.state.urlArray.forEach(function(url) {
      urlArrayElements.push(<img src={url.images.low_resolution.url} /> )
    });

    return(
      <div>
        <div className="search_bar">
          <h1>Hello World</h1>
        </div>

        <div className="footer">
          {urlArrayElements}
        </div>
      </div>
    );
  }
});
