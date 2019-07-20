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
            const composeboxesCopy = this.state.composeboxes.slice(0);
            composeboxesCopy.unshift(new Box());
            this.setState({
                composeboxes: composeboxesCopy,
            });
        } else {
            window.$("#too-many-boxes").modal("show");
        }
    }

    onChange() {
        const composeboxesCopy = this.state.composeboxes.slice(0);
        composeboxesCopy[0].name = "test";
        this.setState({ composeboxes: composeboxesCopy });
    }

    updateArray(newvalues) {
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes[newvalues.id] = new Box(newvalues);

        this.setState({ composeboxes: newcomposeboxes });
    }

    closeBox(id) {
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes.splice(id, 1);
        this.setState({ composeboxes: newcomposeboxes });
    }

    render() {
        return (
            <div className="container position-fixed d-flex align-items-end flex-row-reverse compose">
                {
                    this.state.composeboxes.map((box, id) => <ComposeBox key={id} id={id} {...box}
                        onchange={this.onChange.bind(this)} updateParent={this.updateArray.bind(this)}
                        closeBox={this.closeBox.bind(this)} />)
                }
            </div>
        );
    }
}

Compose.propTypes = {
    linkToNewSnippet: PropTypes.func,
};
