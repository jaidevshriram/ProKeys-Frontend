import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Snippet extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container p-3 w-100 light-snippet-hover">
                    <div className="row">
                        <div className="col w-100">
                            <span className="p-2 pr-5 d-inline font-weight-bold h4">
                                No More BrB
                            </span>
                            <p className="d-inline p-2 light-snippet-preview">
                                No More BrB Gaurang we can get creative.
                            </p>
                            <div className="float-right">
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Edit">

                                    <FontAwesomeIcon
                                        icon="pen"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <FontAwesomeIcon
                                        icon="trash"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Duplicate">
                                    <FontAwesomeIcon
                                        icon="copy"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                                <button className="remove-button-styling" data-toggle="tooltip" data-placement="top" title="Move">
                                    <FontAwesomeIcon
                                        icon="sign-out-alt"
                                        size="1x"
                                        style={{ color: "#038D89" }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-1"/>
            </React.Fragment>
        );
    }
}
