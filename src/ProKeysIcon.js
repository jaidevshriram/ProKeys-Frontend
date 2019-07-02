import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export class ProKeysIcon extends React.Component {
    constructor(props) {
        super(props);
        this.colorMap = {
            light: "#038D89",
            dark: "#000000",
        };
        this.defaultTheme = "light";
    }

    render() {
        return <FontAwesomeIcon
            icon={this.props.icon}
            size="1x"
            style={this.colorMap[this.props.theme] || this.defaultTheme}
        />;
    }
}

ProKeysIcon.propTypes = {
    icon: PropTypes.string,
    theme: PropTypes.string,
};
