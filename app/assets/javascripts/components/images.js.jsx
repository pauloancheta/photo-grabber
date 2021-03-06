var Images = React.createClass({
  getInitialState: function(){
    return {url: this.props.url, caption: this.props.caption, resolution: this.props.resolution}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({url: nextProps.url, caption: nextProps.caption, resolution: nextProps.resolution})
  },

  render: function(){
    var caption = <div className="caption_container"><div className="caption">{this.state.caption}</div></div>;
    return(
      <div className={this.state.resolution}>
        <img src={this.state.url} />
        {this.state.resolution === "standard_resolution" ? caption : ""}
      </div>
    )
  }
})