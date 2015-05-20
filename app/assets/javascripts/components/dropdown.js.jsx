var Dropdown = React.createClass({
  getInitialState: function(){
    return({options: this.props.options })
  },

  render: function(){
    var dropdownOptions = []
    this.state.options.forEach(function(dropdownOption, i){
      dropdownOptions.push(
        <option value={dropdownOption} key={i} >
          {dropdownOption.replace('_', ' ').replace('-',' ')}
        </option>
      );
    });

    return(
      <select className="dropdown_select header_button">
        {dropdownOptions}
      </select>
    )
  }

});