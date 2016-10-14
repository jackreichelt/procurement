import React from 'react';

const Logo = React.createClass({
  render: function() {
    return (
      <a href="http://localhost:8080/"><img src="../assets/logo.png" /></a>
    )
  }
});

module.exports = Logo;
