import React from 'react';
import { Link } from 'react-router-dom';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ButtonCircle extends React.Component {
	render() {

		return (

			<div className="pb-3">
				<button Type="button" className="btn btn-circle btn-primary">
					<Link to={this.props.link}>
						<FontAwesomeIcon icon={this.props.icon} size="4x" style={{ color: '#fff' }}/>
					</Link>
				</button>
			</div>

		);

	}
}

