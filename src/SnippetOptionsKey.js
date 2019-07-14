import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SnippetOptionsKey extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container pb-1 w-100">
                    <div className="row">
                        <div className="col w-100">
                            <div className="float-right">
                            	<span className="px-2">
	                                <FontAwesomeIcon
	                                    icon="pen"
	                                    size="1x"
	                                    style={{ color: "#0" }}
	                                />
	                                <span className="d-inline pl-1">=&nbsp;Edit</span>
	                            </span>
                            	<span className="px-2">
	                                <FontAwesomeIcon
	                                    icon="trash"
	                                    size="1x"
	                                    style={{ color: "#0" }}
	                                />
	                                <span className="d-inline pl-1">=&nbsp;Delete</span>
	                            </span>
                            	<span className="px-2">
	                                <FontAwesomeIcon
	                                    icon="copy"
	                                    size="1x"
	                                    style={{ color: "#0" }}
	                                />
	                                <span className="d-inline pl-1">=&nbsp;Copy</span>
	                            </span>
                            	<span className="px-2">
	                                <FontAwesomeIcon
	                                    icon="sign-out-alt"
	                                    size="1x"
	                                    style={{ color: "#0" }}
	                                />
	                                <span className="d-inline pl-1">=&nbsp;Move</span>
	                            </span>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-1"/>
            </React.Fragment>
        );
	}
}