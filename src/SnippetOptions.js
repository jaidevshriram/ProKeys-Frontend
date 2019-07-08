import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SnippetOptions extends React.Component {
    newFolder() {
        window.$("#new-folder").modal("show");
    }

    Export() {
        window.$("#export").modal("show");
    }

    Import() {
        window.$("#import").modal("show");
    }

    render() {
        return (
            <React.Fragment>
                <div className="container pt-2" id="options">
                    <div className="row">
                        <div className="col">
                            <div className="float-left my-auto">
                                <div className="d-inline pr-3">
                                    <button
                                        className="btn rounded-pill light-border-secondary light-bg-inner light-snippet-option"
                                        // eslint-disable-next-line react/prop-types
                                        onClick={this.props.onclick}>
                                        <span className="pr-2">&nbsp;</span>
                                        <FontAwesomeIcon icon="plus" size="1x" />
                                        <span className="pl-4 pr-2">
                                            <h5 className="d-inline align-item-center">Snippet</h5>
                                        </span>
                                    </button>
                                </div>
                                <div className="d-inline">
                                    <button className="btn rounded-pill light-border-secondary light-bg-inner light-snippet-option"
                                    		onClick={this.newFolder}>
                                        <span className="pr-2">&nbsp;</span>
                                        <FontAwesomeIcon icon="plus" size="1x"/>
                                        <span className="pl-4 pr-2">
                                            <h5 className="d-inline align-item-center">Folder</h5>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="float-right d-flex align-items-center h-100">
                                <a href="#" className="font-italic pr-4 text-dark" onClick={this.Import}>
                                    Import Content
                                </a>
                                <a href="#" className="font-italic text-dark" onClick={this.Export}>
                                    Export Content
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        );
    }
}
