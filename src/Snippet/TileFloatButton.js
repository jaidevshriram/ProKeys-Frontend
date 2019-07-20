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
        const faIcon = this.iconMap[this.props.type];
        return <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title={this.props.type}>
            <ProKeysIcon icon={faIcon} />
        </button>;
    }
}

TileFloatButton.propTypes = {
    type: PropTypes.string,
};
