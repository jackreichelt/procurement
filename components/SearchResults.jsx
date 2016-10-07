import React from 'react';

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
    
    const queryResult = new Promise((resolve, reject) => {
      // result.open("GET", "http://54.164.84.202:8080/v1/index", true);

      result.open('POST', 'http://54.164.84.202:8080/v1/search', true);
      const data = JSON.stringify({"query":"Marbig"});
      result.setRequestHeader('Content-Type', 'application/json');
      result.send(data)
      if (result.status != 0) reject(result.status);
      resolve();
      console.log('Request sent');
    }).then(
      () => {
        console.log('Request resolved', result);
        console.log('response', result.response);
        // response = JSON.parse(result.responseText);

        return response.hits.hits.map((item, i) => {
          const itemName = item._source.desc;
          const vendor = item._source.vendor;
          console.log('itemName', itemName);
          return (
            <p key={i}>{itemName} bought from {vendor}</p>
          );
        });
      },
      status => console.log('Error displaying query:', status)
    )
  },
  
  render: function() {
    return (
      <div>
        <h2>Your Search Results:</h2>
        {this._resultElements()}
      </div>
    )
  }
});

module.exports = SearchResults;