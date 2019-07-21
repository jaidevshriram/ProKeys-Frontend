import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Imports
import Options from "./Options";
import SnippetOptions from "./SnippetOptions";
import ManageSnippet from "./ManageSnippet";
import Settings from "./Settings";
import Compose from "./Compose";
import { DATA } from "./Snippet/data";
import { Generic } from "./data";

export class BaseLayout extends React.Component {
    /**
     * @param {Object} initialValues
     */
    newCompose(initialValues) {
        this.createCompose(initialValues);
    }

    linkToNewSnippet(realCreateCompose) {
        this.createCompose = realCreateCompose;
    }

    getSnippetHandlers() {
        const methodsToPass = ["edit", "delete", "clone", "move"],
            handlers = {},
            voidFN = () => undefined;

        for (const method of methodsToPass) {
            for (const objType of ["Snippet", "Folder"]) {
                const name = method + objType;
                handlers[name] = (this[name] || voidFN).bind(this);
            }
        }

        return handlers;
    }

    editSnippet(snipName) {
        const snip = DATA.snippets.getUniqueSnip(snipName);
        this.newCompose({ name: snip.name, content: snip.body });
    }

    editFolder(folderName) {
        // eslint-disable-next-line no-unused-vars
        const folder = DATA.snippets.getUniqueFolder(folderName);
        // write some ui jaidev
    }

    deleteGeneric(objName, type) {
        const obj = DATA.snippets.getUniqueObject(objName, type),
            parentObj = obj.parentFolder();
        obj.remove();
        parentObj.render();
    }

    deleteSnippet(snipName) {
        this.deleteGeneric(snipName, Generic.SNIP_TYPE);
    }

    deleteFolder(folderName) {
        this.deleteGeneric(folderName, Generic.FOLDER_TYPE);
    }

    duplicateGeneric(objName, type) {
        const obj = DATA.snippets.getUniqueObject(objName, type),
            parentObj = obj.parentFolder();
        obj.clone();
        parentObj.render();
    }

    duplicateSnippet(snipName) {
        this.duplicateGeneric(snipName, Generic.SNIP_TYPE);
    }

    duplicateFolder(folderName) {
        this.duplicateGeneric(folderName, Generic.FOLDER_TYPE);
    }

    moveSnippet() {
        // jaidev ui
    }

    moveFolder() {
        // jaidev ui
    }

    render() {
        function snippetRenderFn(routeProps) {
            return <ManageSnippet {...routeProps} folder="Snippets" handlers={this.getSnippetHandlers()} />;
        }

        return (
            <React.Fragment >
                <div className="container-fluid h-100 main-container">
                    <div className="row h-100">
                        <div className="col-3 light-sidebar-background">
                            <div className="container-fluid">
                                <div className="row h-25">
                                    <div className="col d-flex align-items-center justify-content-center">
                                        <span className="display-3 text-white pt-3">proKeys</span>
                                    </div>
                                </div>
                                <div className="row h-75">
                                    <SnippetOptions onclick={this.newCompose.bind(this)} />
                                    <Options />
                                </div>
                            </div>
                        </div>
                        <div className="col-9 light-outer-box overflow-y-scroll h-100">
                            <div className="container-fluid light-inner-box h-100">
                                <div className="row h-100 overflow-y-scroll">
                                    <div className="col py-4 base-layout-container">
                                        <Switch>
                                            <Route exact path="/" render={snippetRenderFn.bind(this)} />
                                            <Route path="/Snippet" render={snippetRenderFn.bind(this)} />
                                            <Route path="/Setting" component={Settings} className="table-row" />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Compose linkToNewSnippet={this.linkToNewSnippet.bind(this)} />
            </React.Fragment >
        );
    }
}
