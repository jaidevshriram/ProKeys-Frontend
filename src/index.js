import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom';

//Custom Imports
import BaseLayout from './BaseLayout';

//Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faQuestion, faCog, faInfo, faSearch, faPen, faTrash, faCopy, faCheck, faExpand, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

//Add to Font Awesome Icon Library
library.add(faPlus, faQuestion, faCog, faInfo, faSearch, faPen, faTrash, faCopy, faCheck, faExpand, faMinus, faTimes);

const App = () => {
	return (
		<HashRouter>
			<BaseLayout/>
		</HashRouter>
	);
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
