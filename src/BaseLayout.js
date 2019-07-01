import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Imports
import Options from "./Options";
import SnippetOptions from "./SnippetOptions";
import FolderRender from "./ManageSnippet";
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
                <Options />

                <Route exact path="/" render={props => (
                    <SnippetOptions {...props} onclick={this.newCompose.bind(this)} />
                )}
                />

                <Route exact path="/Snippet" component={SnippetOptions} />

                <Switch>
                    <Route exact path="/" component={FolderRender} />
                    <Route path="/Snippet" component={FolderRender} />
                    <Route path="/Setting" component={Settings} />
                </Switch>

                <Compose linkToNewSnippet={this.linkToNewSnippet.bind(this)} />

            </React.Fragment>
        );
    }
}
