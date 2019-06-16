import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Compose extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container w-33 light-compose">
					<div className="row">
						<div className="col">
							<div className="pl-1 pr-1 pb-2 pt-1 w-100">
								<div class="light-icons float-right">
									<button type="button" className= "close p-2" aria-label="Close">
										<span aria-hidden="true"><FontAwesomeIcon icon="times"/></span>
									</button>
									<button type="button" className="close p-2" aria-label="Close">
										<span aria-hidden="true"><FontAwesomeIcon icon="expand"/></span>
									</button>								
									<button type="button" className="close p-2" aria-label="Close">
										<span aria-hidden="true"><FontAwesomeIcon icon="minus"/></span>
									</button>
								</div>

								<form className="pt-3">
								  	<div className="form-group">
								    	<label className="light-compose-title">Snippet Name</label>
								    	<input type="email" class="form-control" placeholder="This will expand into the snippet"/>
								  	</div>
								  	<div class="form-group">
								    	<label className="light-compose-title d-inline">Snippet Content</label>

								    	<label class="light-switch float-right pb-1">
											<input type="checkbox"/>
											<span class="light-slider round"></span>
										</label>
										<span className="text-white float-right pb-3 pr-2">Rich Text Editor</span>

								    	<textarea class="form-control" rows="10" placeholder="This is the content of your snippet. Toggle the button above to switch between edit modes."></textarea>
								  	</div>
								  	<div className="form-group">
								  		<button type="button" className="p-2 remove-button-styling btn light-compose-button">
								  			<span className="px-2">Create!</span>
								  		</button>
								  	</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="w-10 light-compose-mini">
					<div className="py-2 px-2 text-center text-white">
						<span className="font-weight-bold">New Snippet</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}