var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: this.props.tag, sort: this.props.sort, resolution: this.props.resolution}
  },

  feed: function(){
    var limit;
    if(this.state.resolution === "standard_resolution"){
      limit = 1;
    }
    else if(this.state.resolution === "low_resolution"){
      limit = 8;
    }
    else{
      limit = 32;
    }

    var self = this
    var feed = new Instafeed({
      get: 'tagged',
      tagName: this.state.tag,
      clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
      sortBy: this.state.sort,
      limit: limit,
      success: function(images){
        url = images.data;
        self.setState({urlArray: url});
      },
      mock: function(){
        return true
      }
    });

    if(this.state.tag !== ""){
      feed.run();
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.feed, 10000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({tag: nextProps.tag, resolution: nextProps.resolution, sort: nextProps.sort})
  },

  render: function(){
    var urlArrayElements = [];
    var resolution = this.state.resolution;

    this.state.urlArray.forEach(function(url, i) {
      urlArrayElements.push(
        <Images url={url.images[resolution]["url"]} caption={url.caption.text} key={i} resolution={resolution} /> 
      )
    });

    return(
      <div>
        {urlArrayElements.length > 0 ? urlArrayElements : <div className="loading"></div>}
      </div>
    );
  }
})