import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Custom Imports
import Title from './Title';
import Options from './Options';

export default class BaseLayout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Title title="ProKeys Tools"/>
				<Options/>

				<div className="container">
				</div>
			</React.Fragment>
		);
	}
}
