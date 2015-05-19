var Images = React.createClass({
  getInitialState: function(){
    return {url: this.props.url, caption: this.props.caption, resolution: this.props.resolution}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({url: nextProps.url, caption: nextProps.caption, resolution: nextProps.resolution})
  },

  render: function(){
    var caption = <div className="caption_container">{this.state.caption}</div>;
    return(
      <div className={this.state.resolution}>
        <div className="image_container__set">
          <img src={this.state.url} className={this.state.resolution} />
          {caption}
        </div>
      </div>
    )
  }
})