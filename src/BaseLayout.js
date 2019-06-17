import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Custom Imports
import Title from './Title';
import Options from './Options';
import SnippetOptions from './SnippetOptions';
import ManageSnippet from './ManageSnippet';
import Settings from './Settings';
import Compose from './Compose';

export default class BaseLayout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Options/>

				<Route exact path="/" component={SnippetOptions}/>
				<Route exact path="/Snippet" component={SnippetOptions}/>
				<Compose/>

				<Switch>
					<Route exact path="/" component={ManageSnippet}/>
					<Route path="/Snippet" component={ManageSnippet}/>
					<Route path="/Setting" component={Settings}/>
					<Route path="/Test" component={Compose}/>
				</Switch>

			</React.Fragment>
		);
	}
}
