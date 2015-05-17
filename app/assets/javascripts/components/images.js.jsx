var Images = React.createClass({
  getInitialState: function(){
    // url.caption.text = the text
    // url.images.low_resolution.url = the image
    return {array: this.props.urlArray}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({array: nextProps.urlArray})
  },

  render: function(){
    urlArrayElements = [];
    console.log("IMAGES " + urlArrayElements.length);
    this.state.array.forEach(function(url) {
      urlArrayElements.unshift(<img src={url.images.low_resolution.url} /> )
    });
    
    return(
      <div className="feed">
        {urlArrayElements.length > 0 ? urlArrayElements : <div className="loading"></div>}
      </div>
    )
  }
})