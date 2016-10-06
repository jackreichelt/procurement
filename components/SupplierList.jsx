import React from 'react';

const SupplierList = React.createClass({
  
  _supplierElements: function() {
    return this.props.suppliers.map((supplier, i) => {
      return (
        <li key={i}><img style={{height:20}} src={supplier.img} /><a href={supplier.url}>{supplier.name}</a></li>
      )
    })
  },
  
  render: function() {
    return (
      <div>
        <label>{this.props.title}</label>
        <ul>
          {this._supplierElements()}
        </ul>
      </div>
    )
  }
});

module.exports = SupplierList;