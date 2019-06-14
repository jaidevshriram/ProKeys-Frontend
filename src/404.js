import React from 'react';

export default class error404 extends React.Component {
	render() {
		return (
			<div className="container h-100 w-100">
				<div className="row">
					<div className="col">
						Looks like this page doesn't exist :(
						<i>Contact us if you think this is an error.</i>
					</div>
				</div>
			</div>
		);
	}
}