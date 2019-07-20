import React from "react";

// Custom Imports
import PropTypes from "prop-types";
import ComposeBox from "./ComposeBox";

export default class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            composeboxes: [],
            number: 0,
        };
        this.props.linkToNewSnippet(this.createCompose.bind(this));
    }

    createCompose() {
        const newbox = {
            name: "",
            content: "",
            ismax: true,
        };

        if (this.state.number <= 2) {
            this.state.composeboxes.unshift(newbox);
            this.setState({
                composeboxes: this.state.composeboxes,
                number: this.state.number + 1,
            });
        } else {
            window.$("#too-many-boxes").modal("show");
        }
    }

    onChange() {
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes[0].name = "test";
        this.setState({ composeboxes: newcomposeboxes });
    }

    updateArray(newvalues) {
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes[newvalues.id] = {
            name: newvalues.name,
            content: newvalues.content,
            ismax: newvalues.ismax,
        };

        this.setState({ composeboxes: newcomposeboxes });
    }

    closeBox(id) {
        // create a copy
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes.splice(id, 1);
        this.setState({ composeboxes: newcomposeboxes, number: this.state.number - 1 });
    }

    render() {
        return (
            <div className="container position-fixed d-flex align-items-end flex-row-reverse compose">
                {
                    this.state.composeboxes.map((box, id) => <ComposeBox key={id} id={id} name={box.name} content={box.content} ismax={box.ismax}
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
