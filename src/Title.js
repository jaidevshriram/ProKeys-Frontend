import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col text-center">
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </div>
      );
  }
}