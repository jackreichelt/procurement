import React   from 'react';
import Columns from 'react-columns';
import Favicon from 'react-favicon';

import Logo                from './Logo';
import SearchBar           from './SearchBar';
import SupplierList        from './SupplierList';
import ExpertList          from './ExpertList';
import SimilarProjectsList from './SimilarProjectsList';
import SearchResults       from './SearchResults';

import sampleData from '../sampleData';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Favicon url={'../assets/favicon.png'}/>
        <Logo />
        <SearchBar />
        <SearchResults response={sampleData}/>
      </div>
    );
  }
});

module.exports = App;