import React from 'react';

//Custom Imports
import TooManyCompose from './Modals/TooManyCompose';
import NewFolder from './Modals/NewFolder';
import Export from './Modals/Export';

export default class Modals extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TooManyCompose />
				<NewFolder />
				<Export />
			</React.Fragment>
		)
	}
}