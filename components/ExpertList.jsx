import React from 'react';

const ExpertList = React.createClass({
  
  _expertElements: function() {
    return this.props.experts.map((expert, i) => {
      return (
        <div key={i}>
          <img style={{height:40}} src={expert.img} />
          <label>{expert.name}</label>
          <br />
          <p>{expert.bio}</p>
        </div>
      )
    })
  },
  
  render: function() {
    return (
      <div>
        <label>{this.props.title}</label>
        {this._expertElements()}
      </div>
    )
  }
});

module.exports = ExpertList;