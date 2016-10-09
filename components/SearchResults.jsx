import React     from 'react';
import {connect} from 'react-redux';

const SearchResults = React.createClass({
  _resultElements: function() {
    var result = new XMLHttpRequest();
    var response = '';
    
    result.onreadystatechange = function() {
      if (result.readyState != 4) return; // Not there yet
      if (result.status != 200) {
        // Handle request failure here...
        console.log('Request failed with status',result.status)
        return;
      }
      // Request successful, read the response
      response = JSON.parse(result.responseText);
      console.log('response.hits.hits', response.hits.hits);
      
    }
    
    // result.open("GET", "http://54.164.84.202:8080/v1/esindex", true);

    result.open('POST', 'http://54.164.84.202:8080/v1/' + this.props.state.index + '/search', false);
    const data = JSON.stringify({"query":this.props.state.query});
    result.setRequestHeader('Content-Type', 'application/json');
    result.send(data)

    console.log('Request sent');
    console.log('Request resolved', result);
    // response = JSON.parse(result.responseText);

    return response.hits.hits.map((item, i) => {
      const score = item._score;
      var itemName = '';
      var vendor = '';

      // po : desc
      // nswtender : ctitle
      // austender : description

      // po : vendor
      // nswtender : agency
      // austender : agency
      switch(this.props.state.index) {
        case 'po': {
          itemName = item._source.desc;
          vendor = item._source.vendor;
        }
        case 'nswtender': {
          itemName = item._source.ctitle;
          vendor = item._source.agency;
        }
        case 'austender': {
          itemName = item._source.description;
          vendor = item._source.agency;
        }
      }

      // if (itemName.charAt(0) === '[') {
//         itemName = itemName.substr(1);
//       }
      
      return (
        <p key={i}>{score} | {itemName} bought from {vendor}</p>
      );
    });
  },
  
  render: function() {
    console.log('this', this);
    if (!this.props.state) return null
    return (
      <div>
        <h2>Your Search Results:</h2>
        {this._resultElements()}
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);