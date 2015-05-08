var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: ""}
  },

  componentWillReceiveProps: function(nextProps) {
    console.log(nextProps.tag);
    this.setState({tag: nextProps.tag})
  },

  render: function(){
    var self = this
  
    var feed = new Instafeed({
      get: 'tagged',
      tagName: self.state.tag,
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
    }, 10000)

    urlArrayElements = [];
    this.state.urlArray.forEach(function(url) {
      urlArrayElements.push(<img src={url.images.low_resolution.url} /> )
    });

    return(
      <div>
        {urlArrayElements}
      </div>
    );
  }
})