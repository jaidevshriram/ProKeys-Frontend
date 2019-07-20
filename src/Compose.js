import React from "react";

// Custom Imports
import PropTypes from "prop-types";
import ComposeBox from "./ComposeBox";

class Box {
    constructor({ name = "", content = "", ismax = true } = {}) {
        this.name = name;
        this.content = content;
        this.ismax = ismax;
    }

    valueOf() {
        return {
            name: this.name, content: this.content, ismax: this.ismax,
        };
    }
}

export default class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            composeboxes: [],
        };
        this.props.linkToNewSnippet(this.createCompose.bind(this));
    }

    createCompose() {
        if (this.state.composeboxes.length <= 2) {
            const composeboxes = [new Box(), ...this.state.composeboxes];
            this.setState({ composeboxes });
        } else {
            window.$("#too-many-boxes").modal("show");
        }
    }

    updateParent(boxId, newvalues) {
        const composeboxes = this.state.composeboxes.slice(0);
        composeboxes[boxId] = new Box(newvalues);
        this.setState({ composeboxes });
    }

    closeBox(id) {
        this.setState({ composeboxes: this.state.composeboxes.filter((item, idx) => idx !== id) });
    }

    render() {
        return (
            <div className="container position-fixed d-flex align-items-end flex-row-reverse compose">
                {
                    this.state.composeboxes.map((box, id) => <ComposeBox key={id} id={id} {...box}
                        updateParent={this.updateParent.bind(this)} closeBox={this.closeBox.bind(this)} />)
                }
            </div>
        );
    }
}

Compose.propTypes = {
    linkToNewSnippet: PropTypes.func,
};
