var IndexPage = React.createClass({
  getInitialState: function() {
    return {tag: '', resolution: 'low_resolution', sort: 'most-recent'}
  },

  onSubmitHandler: function(event){
    event.preventDefault();
    var tag = React.findDOMNode(this.refs.newTag).value;
    var resolution = React.findDOMNode(this.refs.newRes).value;
    var sort = React.findDOMNode(this.refs.newSort).value;
    if(tag[0] === '#'){
      tag = tag.substring(1, tag.length);
    }
    
    this.setState({tag: tag, resolution: resolution, sort: sort})
  },

  render: function() {
    var resOption = ['low_resolution', 'thumbnail', 'standard_resolution'];
    var sortOption = ['most-recent', 'least-recent', 'most-liked', 'least-liked', 'most-commented', 'least-commented', 'random']
    var feed = <MainFeed tag={this.state.tag} resolution={this.state.resolution} sort={this.state.sort} />;
    var landing = <LandingPage />
    return(
      <div>
        <header>
          <h1>PhotoGrabber</h1>
          <div className="search_bar">
            <form onSubmit={this.onSubmitHandler} >
              <input type="text" ref="newTag" placeholder="#search"></input>
              <Dropdown options={resOption} ref="newRes" />
              <Dropdown options={sortOption} ref="newSort" />
            </form>


          </div>
        </header>

        {this.state.tag.length > 0 ? feed : landing }
      </div>
    );
  }
});