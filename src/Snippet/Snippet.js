import React from "react";
import PropTypes from "prop-types";

import TileFloatButton from "./TileFloatButton";
import { gTranlateImmune } from "./helpers";

export default class Snippet extends React.Component {
    render() {
        return (
            <div className="container-fluid light-snippet">
                <div className="row">
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        [&nbsp;&nbsp;&nbsp;]
                    </div>
                    <div className="col-2 font-weight-bold">
                        {gTranlateImmune(this.props.name)}
                    </div>
                    <div className="col-7 overflow-hide">
                        {this.props.body}
                    </div>
                    <div className="col text-right">
                        <TileFloatButton type="Edit" onClick={() => {
                            this.props.handlers.editSnippet(this.props.name);
                        }} />
                        <TileFloatButton type="Delete" onClick={() => {
                            this.props.handlers.deleteSnippet(this.props.name);
                        }} />
                        <TileFloatButton type="Duplicate" onClick={() => {
                            this.props.handlers.duplicateSnippet(this.props.name);
                        }} />
                        <TileFloatButton type="Move" onClick={() => {
                            this.props.handlers.moveSnippet(this.props.name);
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}

Snippet.propTypes = {
    name: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    handlers: PropTypes.objectOf(PropTypes.func),
};
