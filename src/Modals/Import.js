import React from 'react';

import importimg from '../img/import.png';

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TooManyCompose extends React.Component {
	render() {
		return (
		    <div className="modal fade" tabIndex="-1" role="dialog" id="import">
		      <div className="modal-dialog modal-dialog-centered" role="document">
		        <div className="modal-content">
		          <div className="float-right">
		            <button type="button" className="close p-3" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		          <div className="modal-body">
		          	<div className="h-50 mx-auto">
		          		<div className="container">
		          			<div className="row">
		          				<div className="col text-center">
		          					<h3 className="font-weight-bold">Import Data  <i className=" h5 text-muted">(into this folder)</i></h3>
		          					<span className="text-muted">Duplicate folders will be merged</span>

		          					<img className="img-fluid h-50 mx-auto" src={importimg}/>
		          					
		          					<br/> <br/>

									<div class="input-group">
										<div class="input-group-prepend">
										  <span><button className="btn btn-success">Choose File</button></span>
										</div>
										<input type="text" class="form-control" placeholder="No File Chosen" disabled/>
									</div>

									<form className="form-group float-left mt-4">
										<div className="form-input-group float-left">
											<p className="font-weight-bold">What to do if there are Duplicate Snippets?</p>
										</div>
										
										<br/>

										<div className="form-input-group float-left">
	                                        <label className="light-switch pb-1">
	                                            <input type="checkbox" />
	                                            <span className="light-slider round"></span>
	                                        </label>
	                                        <span className="pl-2">Replace Duplicate Snippets</span>
	                                    </div>
                                        
                                        <br/>
										<div className="form-input-group float-left">
	                                        <label className="light-switch pb-1">
	                                            <input type="checkbox" />
	                                            <span className="light-slider round"></span>
	                                        </label>
	                                        <span className="pl-2">Keep both duplicates</span>
	                                    </div>

	                                    <br/>

										<div className="form-input-group float-left">
	                                        <label className="light-switch pb-1">
	                                            <input type="checkbox" />
	                                            <span className="light-slider round"></span>
	                                        </label>
	                                        <span className="pl-2">Ignore Duplicate</span>
	                                    </div>
									</form>

		          				</div>
		          			</div>
		          		</div>
		           	</div>
		          </div>
		        </div>
		      </div>
		    </div>
		);
	}
}