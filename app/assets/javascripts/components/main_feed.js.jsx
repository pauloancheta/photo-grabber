var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: this.props.tag}
  },

  feed: function(){
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
    this.setState({tag: nextProps.tag})
  },

  render: function(){
    landingPage = <LandingPage />;
    urlArrayElements = <Images urlArray={this.state.urlArray} />;
    return(
      <div>
        {this.state.tag.length > 0 ? urlArrayElements : landingPage}
      </div>
    );
  }
})