import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TileFloatButton from "./TileFloatButton";
import { gTranlateImmune } from "./helpers";

export default class Folder extends React.Component {
    render() {
        return (
            <div className="container-fluid light-folder">
                <div className="row">
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id={this.props.name}/>
                            <label className="custom-control-label" htmlFor={this.props.name}></label>
                        </div>
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={["far", "folder"]} size="2x" className="h-100 align-items-center ml-2" />
                    </div>
                    <div className="col-1 font-weight-bold d-flex align-items-center justify-content-center">
                        {gTranlateImmune(this.props.name)}
                    </div>
                    <div className="col-7 overflow-hide d-flex align-items-center justify-content-center">
                        {this.props.count.folder} folders and {this.props.count.snip} snippets
                    </div>
                    <div className="col text-right">
                        <TileFloatButton type="Edit" onClick={() => {
                            this.props.handlers.editFolder(this.props.name);
                        }} />
                        <TileFloatButton type="Delete" onClick={() => {
                            this.props.handlers.deleteFolder(this.props.name);
                        }} />
                        <TileFloatButton type="Duplicate" onClick={() => {
                            this.props.handlers.duplicateFolder(this.props.name);
                        }} />
                        <TileFloatButton type="Move" onClick={() => {
                            this.props.handlers.moveFolder(this.props.name);
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}

Folder.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
    shouldHighlight: PropTypes.bool,
    handlers: PropTypes.objectOf(PropTypes.func),
};
