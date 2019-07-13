import React from 'react';

export default class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const width = this.props.value + "%"
		return (
			<div className="progress w-75 mx-auto" style={{height: "5%"}}>
			  <div className="progress-bar font-weight-bold" Role="progressbar" style={{ width: width}} aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100">{this.props.value}%</div>
			</div>
		);
	}
}