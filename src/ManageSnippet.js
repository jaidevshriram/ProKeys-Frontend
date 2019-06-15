import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Component
import Snippet from './Snippet';

export default class ManageSnippet extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col w-100">
						<div className="light-outer-box-thick bg-primary">
							<div className="light-inner-box bg-light p-4">
								<Snippet/>
								<Snippet/>
								<Snippet/>
								<Snippet/>
								<Snippet/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}