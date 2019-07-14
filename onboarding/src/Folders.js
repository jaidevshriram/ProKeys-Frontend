import React from 'react';
import ProgressBar from './ProgressBar';

import folder from './img/folder.png';

export default class Folders extends React.Component {
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
		        						<h1 className="font-weight-bold">Organize with Folders!</h1>
		        						<p className="pt-2 pb-3">Folders help you categorize your Snippets to help you organize your content.</p>

		        						<span className="font-weight-bold">Create folders with the <code>+ Folder</code> button</span>

		        						<br/><br/>

		        						<p>Note: Different cannot have snippets of the same name.</p>
		        						<p className="h5 font-weight-bold text-success">Pro Tip: The current folder is displayed in the search bar!</p>
		        					</div>
		        				</div>
		        			</div>
		        		</div>
						<div className="col">
							<img src={folder} className="img-fluid" alt="folder"/>
						</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}