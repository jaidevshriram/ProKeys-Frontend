import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Snippet extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="outer-box bg-primary">
							<div className="light-inner-box bg-light">
								Hello
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}