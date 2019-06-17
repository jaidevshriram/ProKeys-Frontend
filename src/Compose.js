import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Imports
import ComposeBox from './ComposeBox';

export default class Compose extends React.Component {

	render() {
		return (
			<div className="container-fluid bg-primary">
				<div className="row d-flex flex-row-reverse">
					<div className="col">
						<ComposeBox/>
					</div>
				</div>
			</div>
		);
	}
}