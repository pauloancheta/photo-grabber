// <input type="submit" className="search_bar__button"></input>
var IndexPage = React.createClass({
  getInitialState: function() {
    return {tag: ""}
  },

  onSubmitHandler: function(event){
    event.preventDefault();
    var tag = React.findDOMNode(this.refs.newTag).value;
    if(tag[0] === '#'){
      tag = tag.substring(1, tag.length);
    }
    this.setState({tag: tag})
  },

  render: function() {
    var feed = <MainFeed tag={this.state.tag} />;
    var landing = <LandingPage />
    return(
      <div>
        <header>
          <h1>PhotoGrabber</h1>

          <div className="search_bar">
            <form onSubmit={this.onSubmitHandler} >
              <input type="text" ref="newTag" placeholder="Search"></input>
            </form>
          </div>
        </header>

        {this.state.tag.length > 0 ? feed : landing }
      </div>
    );
  }
});
