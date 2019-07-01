import React from "react";
import PropTypes from "prop-types";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Generic } from "./data";

export default class GenericTile extends React.Component {
    constructor(props) {
        super(props);
        this.mainTileDIV = React.createRef();
    }

    checkHighlight() {
        if (this.props.shouldHighlight) {
            this.folderTileDIV.classList.add(Generic.HIGHLIGHTING_CLASS);
            setTimeout(() => {
                this.folderTileDIV.removeClass(Generic.HIGHLIGHTING_CLASS);
            }, 3000);
        }
    }

    render() {
        const ICON_NAME = this.props.type === Generic.FOLDER_TYPE ? "folder" : "snip",
            element = this.props.type === Generic.FOLDER_TYPE ? <p className="d-inline light-snippet-preview float-right my-auto">
                {this.props.count.snip} Snippets. {this.props.count.folder} Folders
            </p> : <p className="d-inline p-2 light-snippet-preview">
                {this.props.body}
            </p>,
            DOM = (
                <React.Fragment>
                    <div className="container p-3 w-100 light-folder-hover" ref={this.folderTileDIV}>
                        <div className="row">
                            <div className="col w-100">
                                <FontAwesomeIcon icon={["far", ICON_NAME]} size="2x" className="my-auto" />
                                <span className="pl-5 my-auto">
                                    <input type="checkbox" className="custom-control-input my-auto" id="selectCheck" />
                                    <label className="custom-control-label" htmlFor="selectCheck"></label>
                                    <span className="pr-5 d-inline font-weight-bold h4 my-auto">
                                        {this.props.name}
                                    </span>
                                </span>
                            </div>

                            {element}

                            <div className="float-right">
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Edit">

                                    <FontAwesomeIcon
                                        icon="pen"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <FontAwesomeIcon
                                        icon="trash"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Duplicate">
                                    <FontAwesomeIcon
                                        icon="copy"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Move">
                                    <FontAwesomeIcon
                                        icon="sign-out-alt"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="m-1" />
                </React.Fragment>
            );

        this.checkHighlight();

        return DOM;
    }
}

GenericTile.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
    shouldHighlight: PropTypes.bool,
    type: PropTypes.string,
    body: PropTypes.string,
};
