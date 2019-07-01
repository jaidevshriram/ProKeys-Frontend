import React from "react";
import PropTypes from "prop-types";

export default class SnippetTile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container p-3 w-100 light-snippet-hover">
                    <div className="row">
                        <div className="col w-100">
                            <span className="p-2 d-inline">
                                <span className="custom-control custom-checkbox d-inline">
                                    <input type="checkbox" className="custom-control-input my-auto" id="brb" />
                                    <label className="custom-control-label" htmlFor="brb">
                                        <span className="p-2 pr-5 d-inline font-weight-bold h4">
                                            <span className="notranslate">
                                                {this.props.name}
                                            </span>
                                        </span>
                                    </label>
                                </span>
                            </span>
                            <p className="d-inline p-2 light-snippet-preview">
                                {this.props.body}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="m-1" />
            </React.Fragment>
        );
    }
}

SnippetTile.propTypes = {
    name: PropTypes.string,
    body: PropTypes.string,
};
