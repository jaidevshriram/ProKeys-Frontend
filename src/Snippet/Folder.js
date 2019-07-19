import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Generic } from "./data";

import TileFloatButton from "./TileFloatButton";

export default class Folder extends React.Component {
    render() {
        return (
        	<div className="container-fluid light-folder">
        		<div className="row">
        			<div className="col-1 d-flex align-items-center justify-content-center">
        				[&nbsp;&nbsp;&nbsp;]
        			</div>
        			<div className="col-1">
                        <FontAwesomeIcon icon={["far", "folder"]} size="2x" className="h-100 align-items-center ml-2" />
        			</div>
        			<div className="col-1 font-weight-bold d-flex align-items-center justify-content-center">
        				{this.props.name}
        			</div>
        			<div className="col-7 overflow-hide d-flex align-items-center justify-content-center">
        				{this.props.count.folder} folders and {this.props.count.snip} snippets
        			</div>
        			<div className="col text-right">
	                    <TileFloatButton type="Edit" />
	                    <TileFloatButton type="Delete" />
	                    <TileFloatButton type="Duplicate" />
	                    <TileFloatButton type="Move" />
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
};
