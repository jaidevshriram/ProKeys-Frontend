import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Imports
import ComposeBox from './ComposeBox';

export default class Compose extends React.Component {

	render() {
		return (
			<div className="container-fluid position-fixed w-100 h-75 d-flex align-items-end flex-row-reverse bg-primary light-snippet">
				<div className="row">
						<ComposeBox/>
						<ComposeBox/>
				</div>
			</div>
		);
	}
}