import React from "react";

import toomanyboxes from "../img/too-many-boxes.png";

export default class TooManyCompose extends React.Component {
    render() {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id="too-many-boxes">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="float-right">
                            <button type="button" className="close p-3" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="h-50 mx-auto">
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center">
                                            <h3 className="font-weight-bold">Uh Oh!</h3>
                                            <h5>There are too many open compose boxes!</h5>
                                            <img className="img-fluid" src={toomanyboxes} />
                                            <i className="text-muted">There is a limit of 3 compose boxes open at a time</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
