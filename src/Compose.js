import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Imports
import ComposeBox from './ComposeBox';

export default class Compose extends React.Component {

	render() {
		return (
			<div class="container-fluid bg-primary">
				<div class="row d-flex flex-row-reverse">
					<div class="col">
						<ComposeBox/>
					</div>
				</div>
			</div>
		);
	}
}