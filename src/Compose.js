/* eslint-disable react/prop-types */
import React from "react";

// Custom Imports
import ComposeBox from "./ComposeBox";

export default class Compose extends React.Component {
    render() {
        return (
            <div className="container-fluid position-fixed w-100 h-100 d-flex align-items-end flex-row-reverse light-snippet">
                <div className="row">
                    { this.props.boxes.map(box => <ComposeBox key={box.id} /> )}
                </div>
            </div>
        );
    }
}
