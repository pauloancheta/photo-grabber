var Images = React.createClass({
  getInitialState: function(){
    // url.caption.text = the text
    // url.images.low_resolution.url = the image
    return {array: this.props.urlArray, resolution: ""}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({array: nextProps.urlArray, resolution: nextProps.resolution})
  },

  render: function(){
    var urlArrayElements = [];
    var test = this.state.resolution;
    this.state.array.forEach(function(url, i) {
      urlArrayElements.push(<img src={url.images[test]["url"]} key={i} /> )
    });
    
    return(
      <div>
        {urlArrayElements.length > 0 ? urlArrayElements : <div className="loading"></div>}
      </div>
    )
  }
})