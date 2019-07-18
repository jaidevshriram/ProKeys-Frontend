import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Imports
import Options from "./Options";
import SnippetOptions from "./SnippetOptions";
import FolderRender from "./ManageSnippet";
import Settings from "./Settings";
import Compose from "./Compose";

// export class BaseLayout extends React.Component {
//     newCompose() {
//         this.createCompose();
//     }

//     linkToNewSnippet(realCreateCompose) {
//         this.createCompose = realCreateCompose;
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Options />

//                 <Route exact path="/" render={props => (
//                     <SnippetOptions {...props} onclick={this.newCompose.bind(this)} />
//                 )}
//                 />

//                 <Route exact path="/Snippet" component={SnippetOptions} />

//                 <Switch>
//                     <Route exact path="/"
//                         render={routeProps => (
//                             <FolderRender {...routeProps} folder="Snippets" />
//                         )} />
//                     <Route path="/Snippet" render={routeProps => (
//                         <FolderRender {...routeProps} folder="Snippets" />
//                     )} />
//                     <Route path="/Setting" component={Settings} />
//                 </Switch>

//                 <Compose linkToNewSnippet={this.linkToNewSnippet.bind(this)} />

//             </React.Fragment>
//         );
//     }
// }


export class BaseLayout extends React.Component {
    newCompose() {
        this.createCompose();
    }

    linkToNewSnippet(realCreateCompose) {
        this.createCompose = realCreateCompose;
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-3 light-sidebar-background">
                            <div className="container-fluid h-25">
                                <div className="row h-100">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <span className="display-3 text-white">proKeys</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 light-outer-box">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
