import React from 'react';
import ProgressBar from './ProgressBar'

import sync from './img/sync.png';

export default class Sync extends React.Component {
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
		        						<h1 className="font-weight-bold">Sync Your Data across PC's!</h1>
		        						<p className="pt-2 pb-3">Use the same snippets on different devices using the same <span className="font-weight-bold">logged in chrome account</span></p>

		        						<span className="h6">You can choose this instead of the default (local) in settings.</span>
		        						<br/><br/>
		        						<span className="text-muted">For first time set up for an account, choose 'First Time', otherwise choose 'Secondary Device'</span>
		        					</div>
		        				</div>
		        			</div>
		        		</div>
						<div className="col">
							<img src={sync} className="img-fluid" alt="folder"/>
						</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}