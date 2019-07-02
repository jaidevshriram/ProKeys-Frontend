import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextTruncate from "react-text-truncate";
import { Generic } from "./data";
import TileFloatButton from "./TileFloatButton";

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

    componentDidUpdate() {
        window.addEventListener("resize", this.forceUpdate);
    }

    render() {
        const ICON_NAME = this.props.type === Generic.FOLDER_TYPE ? "folder" : "file",
            element = this.props.type === Generic.FOLDER_TYPE ? <div className="d-inline-flex h-100 w-80 align-items-center light-snippet-preview">
                <span className="d-inline-flex align-items-center font-weight-bold h-100 mx-2 text-black">
                    {this.props.name}
                </span>
                <span className="w-100 d-inline-flex align-items-center h-100">
                    <TextTruncate
                        line={2}
                        element="span"
                        truncateText="..."
                        text={`${this.props.count.snip} Snippets. ${this.props.count.folder} Folders`}
                    />
                </span>
            </div>

                : <div className="d-inline-flex h-100 w-80 align-items-center light-snippet-preview" style={{ width: "800px" }}>
                    <span className="d-inline-flex align-items-center font-weight-bold h-100 mx-2 text-black">
                        {this.props.name}
                    </span>
                    <TextTruncate
                        line={2}
                        element="span"
                        truncateText="..."
                        text={this.props.body}
                        className="w-100"
                    />
                </div>,
            DOM = (
                <React.Fragment>
                    <div className="container-fluid w-100 light-folder-hover py-2" ref={this.folderTileDIV}>
                        <div className="row">
                            <div className="col w-100">
                                <div className="ml-3 h-100">
                                    <input type="checkbox" className="custom-control-input my-auto h-100" id={this.props.name}/>

                                    <label className="d-inline custom-control-label h-100" htmlFor={this.props.name}>
                                        {
                                            this.props.type === Generic.FOLDER_TYPE
                                                ? <FontAwesomeIcon icon={["far", ICON_NAME]} size="2x" className="d-inline-flex h-100 align-items-center ml-2" />
                                                : <React.Fragment></React.Fragment>
                                        }
                                    </label>

                                    {element}

                                    <div className="float-right my-2">
                                        <TileFloatButton type="Edit" />
                                        <TileFloatButton type="Delete" />
                                        <TileFloatButton type="Duplicate" />
                                        <TileFloatButton type="Move" />
                                    </div>
                                </div>
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
