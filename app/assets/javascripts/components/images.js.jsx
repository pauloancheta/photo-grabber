var Images = React.createClass({
  getInitialState: function(){
    // url.caption.text = the text
    // url.images.low_resolution.url = the image

    // return {text: this.props.text, image: this.props.image}
    return {array: this.props.urlArray}
  },

  render: function(){
    console.log(this.state.text);
    urlArrayElements = [];
    this.state.array.forEach(function(url) {
      // urlArrayElements.unshift(<Images text={url.caption.text} image={url.images.low_resolution.url} />)
      urlArrayElements.push(<img src={url.images.low_resolution.url} /> )
    });
    
    return(
      <div className="feed">
        {urlArrayElements}
      </div>
    )
  }
})