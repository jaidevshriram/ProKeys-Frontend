import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
	render() {
		return (
			<div className="container-fluid option mr-5">
				<Link to={this.props.link}>
					<div className="row">
						<div className="col d-flex align-items-center justify-content-end">
							<FontAwesomeIcon icon={this.props.icon} size="2x"/>
							<span className="option-text">
								&nbsp;&nbsp;&nbsp;{this.props.option}
							</span>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}