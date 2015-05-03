var IndexPage = React.createClass({
  getInitialState: function() {
    return {tag: "hello"}
  },

  onSubmitHandler: function(event){
    event.preventDefault();
    var tag = React.findDOMNode(this.refs.newTag).value;
    this.setState({tag: tag})
  },

  render: function() {
    console.log("render function is running")
    return(
      <div>
        <div className="heading">
          <form onSubmit={this.onSubmitHandler} >
            <input type="text" ref="newTag" ></input>
            <input type="submit"></input>
          </form>
        </div>

        <MainFeed tag={this.state.tag} />
      </div>
    );
  }
});
