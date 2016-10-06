import React from 'react';

const ExpertList = React.createClass({
  
  _expertElements: function() {

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
    
    // result.open("GET", "http://54.164.84.202:8080/v1/index", true);
    // result.send();
    
    result.open("GET", 'http://54.164.84.202:8080/v1/search/HP', false);
    // const data = JSON.stringify({"query":"Marbig"});
    // console.log('data',data);
    // result.setRequestHeader('Content-Type', 'application/json');
    result.send();
    
    console.log('Request sent');

    console.log('response', response);
    
    return response.hits.hits.map((item, i) => {
      const itemName = item._source.desc
      const vendor = item._source.vendor
      console.log('itemName', itemName);
      return (
        <p key={i}>{itemName} bought from {vendor}</p>
      )
    })
  },
  
  render: function() {
    return (
      <div>
        <h2>Your Search Results:</h2>
        {this._expertElements()}
      </div>
    )
  }
});

module.exports = ExpertList;