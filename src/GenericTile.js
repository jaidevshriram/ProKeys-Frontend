import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    render() {
        const ICON_NAME = this.props.type === Generic.FOLDER_TYPE ? "folder" : "file",
            element = this.props.type === Generic.FOLDER_TYPE ? <div className="d-inline ,y-2 light-snippet-preview">
                {this.props.count.snip} Snippets. {this.props.count.folder} Folders
            </div> : <div className="d-inline my-2 light-snippet-preview">
                {this.props.body}
            </div>,
            DOM = (
                <React.Fragment>
                    <div className="container-fluid w-100 light-folder-hover" ref={this.folderTileDIV}>
                        <div className="row">
                            <div className="col w-100">
                                <span className="h-100 ml-3">
                                    <input type="checkbox" className="custom-control-input my-auto pr-5 my-2" id={this.props.name}/>
                                    <label className="custom-control-label" htmlFor={this.props.name}>
                                        {
                                            this.props.type === Generic.FOLDER_TYPE
                                                ? <FontAwesomeIcon icon={["far", ICON_NAME]} size="1x" className=" my-auto" />
                                                : <React.Fragment></React.Fragment>
                                        }
                                        <span className="d-inline font-weight-bold my-auto h-100 my-2">
                                            {this.props.name}
                                        </span>
                                    </label>

                                    {element}

                                    <div className="float-right my-2">
                                        <TileFloatButton type="Edit" />
                                        <TileFloatButton type="Delete" />
                                        <TileFloatButton type="Duplicate" />
                                        <TileFloatButton type="Move" />
                                    </div>
                                </span>
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
