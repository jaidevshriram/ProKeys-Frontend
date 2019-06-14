import React from 'react';

export default class Button extends React.Component {
	render() {

		return (

			<button Type="button" className="btn btn-circle">
				<i className="glyphicon glyphicon-{this.props.iconclass}"></i>
			</button>

		);

	}
}

