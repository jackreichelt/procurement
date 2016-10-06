import React     from 'react';
import Typeahead from 'react-typeahead';
import {connect} from 'react-redux';

const SearchBar = React.createClass({
  onSubmit: function(evt) {
    evt.preventDefault();
    const query = evt.target.elements[0].value;
    const action = {
      type: 'SET_QUERY',
      query
    }
    dispatch(action)
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' placeholder='Enter your search terms' className="field m1"/>
        <button className="btn btn-primary" type='submit'>Search</button>
      </form>
    )
  }
});

module.exports = SearchBar;