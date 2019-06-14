import React from 'react';

//Custom Components
import ButtonCircle from './Button';

export default class Options extends React.Component {
	render() {
		return (
			<div className="container p-5">
				<div className="row">
					<div className="col text-center">
						<ButtonCircle icon="plus" link="/"/>
						Snippet
					</div>
					<div className="col text-center">
						<ButtonCircle icon="cog" link="/Setting"/>
						Setting
					</div>
					<div className="col text-center">
						<ButtonCircle icon="info" link="/About"/>
						About
					</div>
					<div className="col text-center">
						<ButtonCircle icon="question" link="/Help"/>
						Help
					</div>
				</div>
			</div>
		);
	}
}