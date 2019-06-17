import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Imports
import ComposeBox from './ComposeBox';

export default class Compose extends React.Component {

	render() {
		return (
			<div className="container-fluid compose-overlay fixed-bottom">
				<div className="row d-flex flex-row">
					<div className="col">
						<ComposeBox/>
						<ComposeBox/>
					</div>
				</div>
			</div>
		);
	}
}