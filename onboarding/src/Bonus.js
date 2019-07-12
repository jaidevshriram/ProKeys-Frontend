import React from 'react';

import bonus from './img/bonus.png';

export default class Bonus extends React.Component {
	render() {
		return (
			<React.Fragment>
	        
				<div className="progress w-75 mx-auto" style={{height: "5%"}}>
				  <div className="progress-bar" Role="progressbar" style={{ width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
				</div>

		        <div className="container-fluid h-75 pt-5">
		        	<div className="row h-100">
		        		<div className="col d-flex align-self-center justify-content-center">
		        			<div className="container-fluid ">
		        				<div className="row ">
		        					<div className="col">
		        						<h1 className="font-weight-bold pb-4">Bonus Features!</h1>
		        						<p className="text-left">
		        							<ol>
		        								<li>&nbsp;&nbsp;&nbsp;Autocomplete parenthesis and other brackets (Enable in Settings)</li>
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