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
                <div className="container-fluid pt-2" id="options">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-item-center justify-content-center w-100 pt-3">
                                <button
                                    className="btn rounded-pill light-bg-inner light-snippet-option w-100"
                                    // eslint-disable-next-line react/prop-types
                                    onClick={this.props.onclick}>
                                    <span className="pr-2">&nbsp;</span>
                                    <FontAwesomeIcon icon="plus" size="1x" />
                                    <span className="pl-4 pr-2">
                                        <h5 className="d-inline align-item-center">New Snippet</h5>
                                    </span>
                                </button>
                            </div>
                            <div className="d-flex align-item-center justify-content-center w-100 pt-3">
                                <button className="btn rounded-pill light-bg-inner light-folder-option w-100"
                                		onClick={this.newFolder}>
                                    <span className="pr-2">&nbsp;</span>
                                    <FontAwesomeIcon icon="plus" size="1x"/>
                                    <span className="pl-4 pr-2">
                                        <h5 className="d-inline align-item-center">New Folder</h5>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        );
    }
}
