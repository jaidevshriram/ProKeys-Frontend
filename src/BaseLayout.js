import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Imports
import Options from "./Options";
import SnippetOptions from "./SnippetOptions";
import ManageSnippet from "./ManageSnippet";
import Settings from "./Settings";
import Compose from "./Compose";

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
                            <div className="container-fluid">
                                <div className="row h-25">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <span className="display-3 text-white pt-3">proKeys</span>
                                    </div>
                                </div>
                                <div className="row h-75">
                                    <SnippetOptions onclick={this.newCompose.bind(this)}/>
                                    <Options/>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 light-outer-box">
                            <div className="container-fluid light-inner-box h-100">
                                <div className="row h-100">
                                    <div className="col px-4">
                                        <Switch>
                                            <Route exact path="/"
                                                render={routeProps => (
                                                    <ManageSnippet {...routeProps} folder="Snippets" />
                                                )} />
                                            <Route path="/Snippet" render={routeProps => (
                                                <ManageSnippet {...routeProps} folder="Snippets" />
                                            )} />
                                            <Route path="/Setting" component={Settings} className="table-row"/>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Compose linkToNewSnippet={this.linkToNewSnippet.bind(this)}/>
            </React.Fragment>
        );
    }
}
