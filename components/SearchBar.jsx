import React     from 'react';
import Typeahead from 'react-typeahead';
import {connect} from 'react-redux';

const SearchBar = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type='text' placeholder='Enter your search terms' className="field m1"/>
        <button className="btn btn-primary" type='submit'>Search</button>
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
      console.log(evt.target.elements[0].value);
      const query = evt.target.elements[0].value;
      console.log('query', query)
      const action = {
        type: 'SET_QUERY',
        query
      }
      dispatch(action)
    }
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);