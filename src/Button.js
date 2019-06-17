import React from 'react';
import { Link } from 'react-router-dom';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ButtonCircle extends React.Component {
	render() {

		return (

			<div className="pb-3">
				<Link to={this.props.link}>
					<button Type="button" className="btn light-btn-circle light-border-grey">
						<FontAwesomeIcon icon={this.props.icon} size="4x" style={{ color: '#038D89' }}/>
					</button>
				</Link>
			</div>

		);

	}
}

