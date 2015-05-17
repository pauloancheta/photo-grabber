var IndexPage = React.createClass({
  getInitialState: function() {
    return {tag: ""}
  },

  onSubmitHandler: function(event){
    event.preventDefault();
    var tag = React.findDOMNode(this.refs.newTag).value;
    this.setState({tag: tag})
  },

  render: function() {
    return(
      <div>
        <header>
          <h1>PhotoGrabber</h1>

          <div className="search_bar">
            <form onSubmit={this.onSubmitHandler} >
              <input type="text" ref="newTag" ></input>
              <input type="submit" className="search_bar__button"></input>
            </form>
          </div>
        </header>

        <MainFeed tag={this.state.tag} />
      </div>
    );
  }
});
