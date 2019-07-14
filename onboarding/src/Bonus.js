import React from 'react';
import ProgressBar from './ProgressBar';

import bonus from './img/bonus.png';

export default class Bonus extends React.Component {
	render() {
		return (
			<React.Fragment>

				<ProgressBar {...this.props} />

		        <div className="container-fluid h-75 pt-5">
		        	<div className="row h-100">
		        		<div className="col d-flex align-self-center justify-content-center">
		        			<div className="container-fluid ">
		        				<div className="row ">
		        					<div className="col">
		        						<h1 className="font-weight-bold pb-4">Bonus Features!</h1>
		        						<p className="text-left">
		        							<ol>
		        								<li>Autocomplete parenthesis and other brackets (Enable in Settings)</li><br/>
		        								<li>Block it on websites (Do It in Setting)</li><br/>
		        								<li>Right click and the use the ProKeys menu to insert Snippets!</li><br/>
		        							</ol>
		        						</p>
		        					</div>
		        				</div>
		        			</div>
		        		</div>
						<div className="col">
							<img src={bonus} className="img-fluid" alt="folder"/>
						</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}