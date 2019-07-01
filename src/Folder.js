import React from "react";
import PropTypes from "prop-types";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class FolderTile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container p-3 w-100 light-folder-hover">
                    <div className="row">
                        <div className="col w-100">
                            <FontAwesomeIcon icon={["far", "folder"]} size="2x" className="my-auto" />
                            <span className="pl-5 my-auto">
                                <span className="pr-5 d-inline font-weight-bold h4 my-auto">
                                    {this.props.name}
                                </span>
                                <p className="d-inline light-snippet-preview float-right my-auto">
                                    {this.props.count.snip} Snippets. {this.props.count.folder} Folders
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="m-1" />
            </React.Fragment>
        );
    }
}

FolderTile.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
};
