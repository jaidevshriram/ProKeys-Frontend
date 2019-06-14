import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonCircle extends React.Component {
	render() {

		return (

			<div className="pb-3">
				<button Type="button" className="btn btn-circle btn-primary">
					<Link to='{this.props.link}'>
						<i className="glyphicon glyphicon-{this.props.iconclass}"></i>
					</Link>
				</button>
			</div>

		);

	}
}

