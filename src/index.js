import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";

// Custom Imports

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlus,
    faQuestion,
    faCog,
    faInfo,
    faSearch,
    faPen,
    faTrash,
    faCopy,
    faCheck,
    faExpand,
    faMinus,
    faTimes,
    faSignOutAlt,
    faFileCsv,
    faFilePdf,
    faClipboard,
    faServer,
    faFile,
    faCheckSquare,
    faAngleDown,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFolder,
} from "@fortawesome/free-regular-svg-icons";
import Modals from "./Modals";

import { BaseLayout } from "./BaseLayout";
import * as serviceWorker from "./serviceWorker";

// Add to Font Awesome Icon Library
library.add(
    faPlus,
    faQuestion,
    faCog,
    faInfo,
    faSearch,
    faPen,
    faTrash,
    faCopy,
    faCheck,
    faExpand,
    faMinus,
    faTimes,
    faSignOutAlt,
    faFolder,
    faFileCsv,
    faFilePdf,
    faClipboard,
    faServer,
    faFile,
    faCheckSquare,
    faAngleDown,
    faAngleUp,
);

// eslint-disable-next-line no-unused-vars
const App = () => (
    <HashRouter>
        <BaseLayout />
    </HashRouter>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

ReactDOM.render(<Modals/>, document.getElementById("modal"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
