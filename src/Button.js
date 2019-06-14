import React from 'react';

export default class ButtonCircle extends React.Component {
	render() {

		return (

		<div>
			<button Type="button" className="btn btn-circle btn-primary p-1">
				<i className="glyphicon glyphicon-{this.props.iconclass}"></i>
				Hello
			</button>
		</div>

		);

	}
}

