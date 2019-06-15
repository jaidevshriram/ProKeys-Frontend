import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Snippet extends React.Component {
	render() {
		return (
			<div className="container pb-3 w-100">
				<div className="row">
					<div className="col w-100">
						<span className="p-2 pr-5 d-inline font-weight-bold h4">No More BrB</span>
						<p className="d-inline p-2 light-snippet-preview">No More BrB Gaurang we can get creative.</p>
						<div className="float-right">
							<button className="remove-button-styling">
								<FontAwesomeIcon icon="pen" size="1x" style={{ color: '#038D89' }}/>
								<span>&nbsp;&nbsp;Edit</span>
							</button>
							<button className="remove-button-styling">
								<FontAwesomeIcon icon="trash" size="1x" style={{ color: '#038D89' }}/>
								<span>&nbsp;&nbsp;Delete</span>
							</button>
							<button className="remove-button-styling">
								<FontAwesomeIcon icon="copy" size="1x" style={{ color: '#038D89' }}/>
								<span>&nbsp;&nbsp;Duplicate</span>
							</button>
						</div>

						<hr/>
					</div>
				</div>
			</div>
		)
	}
}