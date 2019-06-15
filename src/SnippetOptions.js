import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SnippetOptions extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container pt-2" id="options">
					<div className="row">
						<div className="col">
							<div className="float-left">
								<div className="d-inline pr-3">
									<button className="btn rounded-pill light-border-secondary">
										<FontAwesomeIcon icon="plus" size="2x" className="pl-2"/>
										<span className="pl-4 pr-2"><h4 className="d-inline align-item-center">Snippet</h4></span>
									</button>
								</div>
								<div className="d-inline">
								<button className="btn rounded-pill light-border-secondary">
									<FontAwesomeIcon icon="plus" size="2x" className="pl-2"/>
									<span className="pl-4 pr-2"><h4 className="d-inline align-item-center">Folder</h4></span>
								</button>
								</div>
							</div>

							<div className="float-right">
								<a href="#" className="d-inline font-italic pr-4">Import Content</a>
								<a href="#" className="font-italic">Export Content</a>
							</div>
						</div>
					</div>

					<div className="row py-3">
						<div className="col">
							<div className="light-outer-box">
						        <div className="light-inner-searchbar light-searchbar mx-auto my-auto h-100 w-100">
						         	<div className="h-100 pl-3 light-push-input">
						         		<FontAwesomeIcon icon="search" className="light-search-icon"/>
						         		<input className="light-search-input" type="text" placeholder="Search Snippets"/>
						         	</div>
						        </div>
						    </div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
};