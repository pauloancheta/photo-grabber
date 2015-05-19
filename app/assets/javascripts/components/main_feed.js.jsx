var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: this.props.tag, sort: this.props.sort, resolution: this.props.resolution}
  },

  feed: function(){
    var self = this
    var feed = new Instafeed({
      get: 'tagged',
      tagName: this.state.tag,
      clientId: 'f9c78cfd275943e1aa93165e83ee13e3',
      sortBy: this.state.sort,
      limit: 8,
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
    return(
      <div>
        <Images urlArray={this.state.urlArray} resolution={this.state.resolution}/>
      </div>
    );
  }
})