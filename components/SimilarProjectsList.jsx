import React from 'react';

const SimilarProjectsList = React.createClass({

  _projectElements: function() {
    return this.props.projects.map((project, i) => {
      return (
        <div key={i}>
          <a href={project.url}>{project.name}</a>
          <p><b>Project Date:</b> {project.date}</p>
        </div>
      )
    })
  },

  render: function() {
    return (
      <div>
        <label>{this.props.title}</label>
        {this._projectElements()}
      </div>
    )
  }
});

module.exports = SimilarProjectsList;
