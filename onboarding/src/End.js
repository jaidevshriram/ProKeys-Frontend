import React from 'react';
import Typed from 'typed.js';

import end from './img/end.png'

export default class End extends React.Component {
	componentDidMount() {
		const options = {
		  strings: ["You Did It!"],
		  typeSpeed: 60,
		}

		this.typed = new Typed(this.el, options);
	}
	render() {
		return (
			<React.Fragment>
		        <div className="container-fluid h-75 pt-5">
		        	<div className="row h-100">
		        		<div className="col d-flex align-self-center justify-content-center">
		        			<div className="container-fluid ">
		        				<div className="row ">
		        					<div className="col">
									
										<h1 className="font-weight-bold">Welcome to <span className="welcome-title" ref={(el) => {this.el = el; }} /></h1>
										<p className="h4 pb-5 text-muted"><i>Congrats on becoming a pro</i></p>

										<p className="h5">Step into the world and unleash your words. Let ProKeys help your productivity soar.</p>
										<p className="h4 font-weight-bold pt-4">If you have any further queries, contact us at <a href="mailto:prokeys.feedback@gmail.com">our email address</a></p>
		        					</div>
		        					<div className="col">
		        						<img src={end} className="img-fluid"/>
		        					</div>
		        				</div>
		        			</div>
		        		</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}