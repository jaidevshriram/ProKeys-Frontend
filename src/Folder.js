import React from "react";
import PropTypes from "prop-types";
import GenericTile from "./GenericTile";
import { Generic } from "./data";

export default class FolderTile extends React.Component {
    render() {
        return <GenericTile {...this.props} type={Generic.FOLDER_TYPE} longText={`${this.props.count.snip} Snippets. ${this.props.count.folder} Folders`} />;
    }
}

FolderTile.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
    shouldHighlight: PropTypes.bool,
};
