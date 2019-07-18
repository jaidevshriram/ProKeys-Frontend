import React from "react";
import PropTypes from "prop-types";

export default class Snippet extends React.Component {
    render() {
        return (
        	<div className="container-fluid light-snippet">
        		<div className="row">
        			<div className="col-1 d-flex align-items-center justify-content-center">
        				[&nbsp;&nbsp;&nbsp;]
        			</div>
        			<div className="col-2 font-weight-bold">
        				{this.props.name}
        			</div>
        			<div className="col-7 overflow-hide">
        				{this.props.body}
        			</div>
        			<div className="col">

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
};
