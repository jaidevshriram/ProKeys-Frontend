/* eslint-disable react/prop-types */
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PairCharacterListItem extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <span className="p-4 font-weight-bold">{this.props.firstcharacter}</span>
                <span className="p-4">
                    <FontAwesomeIcon icon="plus" />
                </span>
                <span className="p-4 font-weight-bold">{this.props.secondcharacter}</span>

                <button type="button" className="close float-right" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </React.Fragment>
        );
    }
}
