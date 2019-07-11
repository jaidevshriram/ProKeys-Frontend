import React from 'react';

export default class ControlData extends React.Component {
	render() {
		return (
			<React.Fragment>
	        
				<div className="progress w-75 mx-auto" style={{height: "5%"}}>
				  <div className="progress-bar" Role="progressbar" style={{ width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
				</div>

		        <div className="container-fluid h-75 pt-5 pointer-all">
		        	<div className="row">
		        		<div className="col text-center">
		        			<h3 className="font-weight-bold">Import and Export your Data</h3>
		        			<i className="text-muted">Use this for backing up data, transferring between PC's, or even editing it</i>
		        		</div>
		        	</div>
		        	<div className="py-3">&nbsp;</div>
		        	<div className="row h-100">
		        		<div className="col">
							<ul className="list-group text-left">
							  <li className="list-group-item list-group-item-success font-weight-bold h4 text-center">Import</li>
							  <li className="list-group-item">Imported Data will be added to the current folder</li>
							  <li className="list-group-item">Duplicate Folders will be merged!</li>
							  <li className="list-group-item text-danger">Duplicate Snippet will be replaced</li>
							  <li className="list-group-item font-weight-bold">Use this to add Snippets to a new broswer or restore your snippets!</li>
							</ul>
		        		</div>
						<div className="col">
							<ul className="list-group text-left">
							  <li className="list-group-item list-group-item-danger text-center font-weight-bold h4 text-center">Export</li>
							  <li className="list-group-item">Export Data to save this folder and all nested folders</li>
							  <li className="list-group-item">CSV Export only supports Snippets, loses folder structure</li>
							  <li className="list-group-item text-danger">Print Snippets does not support importing</li>
							  <li className="list-group-item font-weight-bold">Use this to save your data and use it later or edit the snippets!</li>
							</ul>
						</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}