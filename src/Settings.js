import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom Imports
import PairCharacterListItem from './PairCharacterListItem';

export default class SnippetOptions extends React.Component {
	render() {
		return (
			<div className="container pt-2">
				<div className="row">
					<div className="col w-">
						<div className="light-outer-box-thick bg-primary">
							<div className="light-inner-box p-4">
								<div className="container-fluid">
									<span className="h3 font-weight-bold">HotKey Options</span>
									<div className="row">
										<div className="col-12 col-md-6">
											<p className="pt-2 text-justified">You have the option of setting the trigger for the Snippets. Click on the button below and press the character(s) to trigger the snippet.</p>
										</div>
										<div className="col-12 col-md-6">
											<p className="text-muted float-right text-right">Default is 'Shift+Space'. <br/> Eg: Press the 'Tab' key to set this as the default expander.</p>
										</div>
									</div>
								</div>

								<hr className="pb-2"/>

								<div className="container-fluid">
									<span className="h3 font-weight-bold">Blocked Websites</span>
									<div className="row">
										<div className="col-12 col-md-6">
											<p className="pt-2 text-justified">Enter the URL (link) of a website that ProKeys should not work on.</p>
											<form>
												<div className="form-group">
											    	<label for="Blocked" className="font-weight-bold">List of Blocked Websites:</label>
											    	<textarea className="form-control" id="Blocked" rows="3"></textarea>
											  	</div>
											</form>
										</div>
										<div className="col-12 col-md-6">
											<p className="text-muted float-right text-right">ProKeys will not expand text on Blocked websites.</p>
										</div>
									</div>
								</div>

								<hr className="pb-2"/>

								<div className="container-fluid">
									<span className="h3 font-weight-bold">Storage Mode</span>
									<div className="row">
										<div className="col-12 col-md-6">
											<p className="pt-2 text-justified">Choose the storage mode for your Snippet data.</p>
											<div className="form-check">
											  <input className="form-check-input" type="radio" value=""/>
											  <label className="form-check-label">
											    Local Storage - <span className="text-italic text-muted">Offers more storage than the other options</span>
											  </label>
											</div>
											<div className="form-check">
											  <input className="form-check-input" type="radio" value=""/>
											  <label className="form-check-label">
											    Sync - <span className="text-italic text-muted">Let's you sync your Snippets across your PC's</span>
											  </label>
											</div>
										</div>
										<div className="col-12 col-md-6">
											<p className="text-muted float-right text-right">It is always recommended to save and export your snippets to protect your data in the event of an unlikely failure.</p>
										</div>
									</div>
								</div>

								<hr className="pb-2"/>

								<div className="container-fluid">
									<span className="h3 font-weight-bold">Pair Characters</span>
									<div className="row">
										<div className="col-12 col-md-6">
											<p className="pt-2 text-justified">Some characters like '(' and ')' belong together. Decide your own pairs.</p>
											
											<form>
											  	<div className="form-row">
											    	<div className="col-lg-5 mb-3">
											      		<input type="text" className="form-control" id="validationDefault01" placeholder="First Character" required/>
											    	</div>
											    	<div className="col-lg-1 text-center">
											    		<FontAwesomeIcon icon="plus"/>
											    	</div>
											    	<div className="col-lg-5 mb-3">
											      		<input type="text" className="form-control" id="validationDefault02" placeholder="Second Character" required/>
											    	</div>
											    	<div className="col-lg-1 text-center">
											    		<button class="btn light-bg-gradient no-outline no-border w-r-lg-100" type="submit"><FontAwesomeIcon icon="check" style={{ color: '#ffffff' }}/></button>
											    	</div>
											  	</div>
											</form>

											<ul class="list-group list-group-flush text-center">
												<li class="list-group-item">
													<PairCharacterListItem firstcharacter="(" secondcharacter=")" />
												</li>
												<li class="list-group-item">
													<PairCharacterListItem firstcharacter="{" secondcharacter="}" />
												</li>
												<li class="list-group-item">
													<PairCharacterListItem firstcharacter="[" secondcharacter="]" />
												</li>
												<li class="list-group-item">
													<PairCharacterListItem firstcharacter="&#34;" secondcharacter="&#34;" />
												</li>
												<li class="list-group-item">
													<PairCharacterListItem firstcharacter="&lsquo;" secondcharacter="&rsquo;" />
												</li>
											</ul>

										</div>

										<div className="col-12 col-md-6">
											<p className="text-muted float-right text-right">On typing the first character, the second is automatically inserted and your cursor/caret is placed in-between automatically!</p>
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
};