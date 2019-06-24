import React from 'react';

//Custom Imports
import TooManyCompose from './Modals/TooManyCompose';
import NewFolder from './Modals/NewFolder';

export default class Modals extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TooManyCompose />
				<NewFolder />
			</React.Fragment>
		)
	}
}