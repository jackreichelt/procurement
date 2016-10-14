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

    result.open('POST', 'http://54.159.210.119:8080/v1/' + this.props.state.index + '/search', false);
    const data = JSON.stringify({"query":this.props.state.query});
    result.setRequestHeader('Content-Type', 'application/json');
    result.send(data)

    console.log('Request sent');
    console.log('Request resolved', result);
    // response = JSON.parse(result.responseText);

    function toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    return response.hits.hits.map((item, i) => {
      console.log('item', i, item);
      const score = item._score;
      var desc = toTitleCase(item.proc_desc);
      const supplier = toTitleCase(item.proc_supplier);
      const date = item.proc_date;
      const value = item.proc_value;
      var agency = item.proc_agency != null ? toTitleCase(item.proc_agency) : "Unknown Agency"

      if (desc.charAt(0) === '[') {
        desc = desc.substr(1);
      }

      if (i % 2 === 0) {
        // light background
        return (
          <div className="light-wrapper" key={i}>
            <p className="item">{desc}  by {agency}</p>
            <p>From {supplier}  on {date}  for ${value}</p>
            <p><a href="http://somewhere:8080/?">More Info</a></p>
          </div>
        );
      } else {
        // dark background
        return (
          <div className="dark-wrapper" key={i}>
            <p className="item">{desc} by {agency}</p>
            <p>From {supplier} on {date} for ${value}</p>
            <p><a href="http://fake:8080/?">More Info</a></p>
          </div>
        );
      }

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
