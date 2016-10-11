import React     from 'react';
import {connect} from 'react-redux';

const SearchBar = React.createClass({
  _indexOptions: function() {
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
      console.log('index response', response);
    }

    // result.open("GET", "http://54.164.84.202:8080/v1/esindex", true);

    console.log('making request')
    result.open('GET', 'http://54.164.84.202:8080/v1/esindex', false);
    console.log('sending request')
    result.send()
    console.log('request sent')
    console.log(result)

    return response.esindex.map((item, i) => {
      return (
        <option
          className="li"
          value={item}
          key={i + 1}
        >{item}</option>
      );
    });
  },
  render: function() {
    return (
      <form className="form-wrapper" onSubmit={this.props.onSubmit}>
        <input type='text' placeholder='Search here...' className="field m1"/>
        <button className="btn btn-primary" type='submit'>Search</button>
        <select className="dropdown-wrapper">
          {this._indexOptions()}
        </select>
      </form>
    )
  }
});

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (evt) => {
      evt.preventDefault();
      console.log('elements', evt.target.elements);
      const query = evt.target.elements[0].value;
      const index = evt.target.elements[2].value
      console.log('query', query, 'index', index)
      const action = {
        type: 'SET_QUERY',
        payload: {query, index}
      }
      dispatch(action)
    }
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
