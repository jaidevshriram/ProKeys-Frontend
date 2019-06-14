import React from 'react';

//Custom Components
import ButtonCircle from './Button';

export default class Options extends React.Component {
	render() {
		return (
			<div className="container p-5">
				<div className="row">
					<div className="col text-center">
						<ButtonCircle iconclass="plus"/>
						Setting
					</div>
					<div className="col text-center">
						<ButtonCircle iconclass="plus"/>
						Setting
					</div>
					<div className="col text-center">
						<ButtonCircle iconclass="plus"/>
						Setting
					</div>
					<div className="col text-center">
						<ButtonCircle iconclass="plus"/>
						Setting
					</div>
				</div>
			</div>
		);
	}
}