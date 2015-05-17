var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: this.props.tag}
  },

  tick: function(){
    var self = this
    var feed = new Instafeed({
      get: 'tagged',
      tagName: this.state.tag,
      clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
      limit: 8,
      success: function(images){
        url = images.data;
        self.setState({urlArray: url});
        console.log(self.state.tag);
      },
      mock: function(){
        return true
      }
    });
    feed.run();
  },

  componentDidMount: function() {
    // this.interval = setInterval(this.tick, 5000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({tag: nextProps.tag})
  },

  render: function(){
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