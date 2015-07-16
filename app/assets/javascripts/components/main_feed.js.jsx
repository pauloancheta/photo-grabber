var MainFeed = React.createClass({
  getInitialState: function(){
    return {urlArray: [], tag: this.props.tag, sort: this.props.sort, resolution: this.props.resolution}
  },

  feed: function(){
    // switch(this.state.resolution){
    //   case "standard_resolution": var limit = 1;
    //   case "low_resolution": var limit = 8;
    //   default: var limit = 32;
    // }
    var resolution = this.state.resolution;
    if(resolution === "low_resolution"){var limit = 8}
    else if(resolution === "standard_resolution"){ var limit = 1 }
    else{var limit = 32}

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

    feed.run();
  },

  componentDidMount: function() {
    this.interval = setInterval(this.feed, 5000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({tag: nextProps.tag, resolution: nextProps.resolution, sort: nextProps.sort, resolution: nextProps.resolution})
  },

  render: function(){
    var urlArrayElements = [];
    var resolution = this.state.resolution;

    this.state.urlArray.forEach(function(url, i) {
      if(!(url.caption.text.indexOf('@pbarron12') > -1 || url.caption.text.indexOf('#beyondwonderland2015') > -1 || url.caption.text.indexOf('Jason') > -1 || url.caption.text.indexOf('Pow') > -1 || url.caption.text.indexOf('#newlywedQT') > -1 || url.caption.text.indexOf('.@krispykreme') > -1 || url.caption.text.indexOf('#jeepney') > -1 || url.user.full_name.indexOf('Bernadette Young') > -1 || url.caption.text.indexOf('#beach') > -1 || url.user.full_name.indexOf('Sonia Bea Wee-Lozada') > -1 )){
        urlArrayElements.push(
          <Images url={url.images[resolution]["url"]} caption={url.caption.text} key={i} resolution={resolution} /> 
        )
          console.log(url)
      }
    });

    return(
      <div className="image_container">
        {urlArrayElements.length > 0 ? urlArrayElements : <div className="loading"></div>}
      </div>
    );
  }
})
