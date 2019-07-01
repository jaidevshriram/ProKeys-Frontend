import React from "react";
import PropTypes from "prop-types";
import GenericTile from "./GenericTile";

export default class FolderTile extends React.Component {
    render() {
        return <GenericTile {...this.props} />;
    }
}

FolderTile.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
    shouldHighlight: PropTypes.bool,
};
