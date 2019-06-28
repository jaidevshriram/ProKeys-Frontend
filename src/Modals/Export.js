import React from 'react';

import exportimg from '../img/export.png';

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TooManyCompose extends React.Component {
	render() {
		return (
		    <div className="modal fade" tabIndex="-1" role="dialog" id="export">
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
		          					<h3 className="font-weight-bold">Export Data</h3>
		          					<i className="text-muted">(Additional Options can be found in Advanced Settings)</i>
		          					<img className="img-fluid h-50 mx-auto" src={exportimg}/>
		          					
		          					<br/><br/>

      								<button className="btn btn-success w-100">
      									<span>Backup Data &nbsp;&nbsp;</span>
      									<FontAwesomeIcon icon="server"/>
      								</button>
      								
      								<br/><br/>

      								<button className="btn btn-danger w-100">
      									<span>Print Snippets &nbsp;&nbsp;</span>
      									<FontAwesomeIcon icon="file-pdf"/>
      								</button>

      								<br/><br/>

      								<button className="btn btn-info w-100">
      									<span>Data as CSV &nbsp;&nbsp;</span>
      									<FontAwesomeIcon icon="file-csv"/>
      								</button>

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