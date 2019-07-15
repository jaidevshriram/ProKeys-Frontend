import React from 'react';

export default class TooManyCompose extends React.Component {
	render() {
		return (
		    <div className="modal fade" tabIndex="-1" role="dialog" id="new-folder">
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
		          					<h3 className="font-weight-bold pb-5">New Folder</h3>
									<form>
									  <div className="form-group">
									    <label>Name</label>
									    <input type="email" className="form-control" placeholder="This is the name of the folder"/>
									  </div>
									  <div className="form-group">
									    <label>Example select</label>
									    <select className="form-control">
									      <option>1</option>
									      <option>2</option>
									      <option>3</option>
									      <option>4</option>
									      <option>5</option>
									    </select>
									  </div>
									</form>
		          				</div>
		          			</div>
		          		</div>
		           	</div>
		          </div>
		          <div className="modal-footer">
		            <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
		          </div>
		        </div>
		      </div>
		    </div>
		);
	}
}