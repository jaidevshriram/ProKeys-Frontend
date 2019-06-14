import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Custom Imports
import Title from './Title';
import Options from './Options';
import SnippetOptions from './SnippetOptions';
import Snippet from './Snippet';

export default class BaseLayout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Title title="ProKeys Tools"/>
				<Options/>

				<Route path="/" component={SnippetOptions}/>

				<Switch>
					<Route path="/" component={Snippet}/>
					<Route path="/Snippet" component={Snippet}/>
				</Switch>

			</React.Fragment>
		);
	}
}
