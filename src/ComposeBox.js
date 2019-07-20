/* eslint-disable react/prop-types */
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Compose extends React.Component {
    constructor(props) {
        super(props);

        this.value = {};

        for (const key of Object.keys(this.props)) {
            this.value[key] = this.props[key];
        }
    }

    minimize() {
        this.value.ismax = false;
        this.updateParent();
    }

    maximize() {
        if (window.innerWidth < 1000) {
            alert("Window Size too small!");
            return;
        }
        this.value.ismax = true;
        this.updateParent();
    }

    updateParent() {
        this.props.updateParent(this.props.id, this.value);
    }

    nameChange(e) {
        this.value.name = e.target.value;
        this.updateParent();
    }

    contentChange(e) {
        this.value.content = e.target.value;
        this.updateParent();
    }

    close() {
        this.props.closeBox(this.props.id);
    }

    componentDidUpdate() {
        this.value = {};

        for (const key of Object.keys(this.props)) {
            this.value[key] = this.props[key];
        }
    }

    updateDimensions() {
        if (window.innerWidth < 1000) {
            this.value.ismax = false;
            this.updateParent();
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const displayClasses = ["row d-block", "row d-none"],
            minClass = displayClasses[+this.props.ismax],
            maxClass = displayClasses[+!this.props.ismax];

        return (
            <div className="compose-box light-snippet renable-pointer align-self-end px-1" id={this.props.id}>
                <div className="container-fluid w-100 light-compose float-right">
                    <div className={minClass} onClick={this.maximize.bind(this)}>
                        <div className="col d-flex align-items-end">
                            <div className="light-compose-mini maximize">
                                <div className="py-2 px-2 text-center text-white">
                                    <span className="font-weight-bold">Snippet</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={maxClass}>
                        <div className="col">
                            <div className="pl-1 pr-1 pb-2 pt-1 w-100">
                                <div className="light-icons float-right">
                                    <button type="button" className="close p-2" aria-label="Close" onClick={this.close.bind(this)}>
                                        <span aria-hidden="true"><FontAwesomeIcon icon="times" /></span>
                                    </button>
                                    <button type="button" className="close p-2" aria-label="expand">
                                        <span aria-hidden="true"><FontAwesomeIcon icon="expand" /></span>
                                    </button>
                                    <button type="button" className="close p-2 minimize" aria-label="minimize" onClick={this.minimize.bind(this)}>
                                        <span aria-hidden="true"><FontAwesomeIcon icon="minus" /></span>
                                    </button>
                                </div>

                                <form className="pt-3">
                                    <div className="form-group">
                                        <label className="light-compose-title">Snippet Name</label>
                                        <input type="email" className="form-control" placeholder="This will expand into the snippet" value={this.value.name} onChange={this.nameChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="light-compose-title d-inline">Snippet Content</label>

                                        <label className="light-switch float-right pb-1">
                                            <input type="checkbox" />
                                            <span className="light-slider round"></span>
                                        </label>
                                        <span className="text-white float-right pb-3 pr-2">Rich Text Editor</span>

                                        <textarea className="form-control" rows="15" value={this.value.content} placeholder="This is the content of your snippet. Toggle the button above to switch between edit modes." onChange={this.contentChange.bind(this)}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="p-2 remove-button-styling btn light-compose-button">
                                            <span className="px-2">Create!</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
