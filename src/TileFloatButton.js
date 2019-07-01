import React from "react";
import PropTypes from "prop-types";
import { ProKeysIcon } from "./ProKeysIcon";

export default class TileFloatButton extends React.Component {
    constructor(props) {
        super(props);
        this.iconMap = {
            Duplicate: "copy",
            Edit: "pen",
            Move: "sign-out-alt",
            Delete: "trash",
        };
    }

    render() {
        return <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title={this.props.type}>
            <ProKeysIcon icon={this.iconMap[this.props.type]} />
        </button>;
    }
}

TileFloatButton.propTypes = {
    type: PropTypes.string,
};
