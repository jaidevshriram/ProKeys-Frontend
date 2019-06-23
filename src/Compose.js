import React from 'react';

//Custom Imports
import ComposeBox from './ComposeBox';

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

        this.setState({
            composeboxes: this.state.composeboxes.concat(newbox),
        });
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
        this.setState({ composeboxes: newcomposeboxes });
    }

	render() {

		return (
	        <div className="container-fluid position-fixed w-100 h-100 d-flex align-items-end flex-row-reverse light-snippet">
	            <div className="row">
	                {
	                    this.state.composeboxes.map((box, id) => <ComposeBox key={id} id={id} name={box.name} content={box.content} ismax={box.ismax}
	                        onchange={this.onChange.bind(this)} updateParent={this.updateArray.bind(this)}
	                        closeBox={this.closeBox.bind(this)} />)
	                }
	            </div>
	        </div>
	    );
	}
}