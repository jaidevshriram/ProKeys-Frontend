import React from 'react';
import Typed from 'typed.js';

export default class Welcome extends React.Component {
	componentDidMount() {
		const options = {
		  strings: ["ProKeys Text Expander!"],
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
										<p className="h4 pb-5 text-muted"><i>The ultimate typing utility for all your needs!</i></p>

										<p className="h5">This is a quick start guide to make you a pro user in just 2 minutes!</p>
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