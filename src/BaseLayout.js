import React from "react";
import { Route, Switch } from "react-router-dom";

// Custom Imports
import Options from "./Options";
import SnippetOptions from "./SnippetOptions";
import ManageSnippet from "./ManageSnippet";
import Settings from "./Settings";
import ComposeBox from "./ComposeBox";

export class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            composeboxes: [],
            number: 0,
        };
    }

    newCompose() {
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
        const newcomposeboxes = this.state.composeboxes;
        newcomposeboxes[0].name = "test";
        this.setState({ composeboxes: newcomposeboxes });
    }

    updateArray(newvalues) {
        const newcomposeboxes = this.state.composeboxes;
        newcomposeboxes[newvalues.id] = {
            name: newvalues.name,
            content: newvalues.content,
            ismax: newvalues.ismax,
        };

        this.setState({ composeboxes: newcomposeboxes });
    }

    deleteBox(id) {
        // create a copy
        const newcomposeboxes = this.state.composeboxes.slice(0);
        newcomposeboxes.splice(id, 1);
        this.setState({ composeboxes: newcomposeboxes });
    }


    render() {
        return (
            <React.Fragment>
                <Options />

                <Route exact path="/" render={props => (
                    <SnippetOptions {...props} onclick={this.newCompose.bind(this)} />
                )}
                />

                <Route exact path="/Snippet" component={SnippetOptions} />

                <Switch>
                    <Route exact path="/" component={ManageSnippet} />
                    <Route path="/Snippet" component={ManageSnippet} />
                    <Route path="/Setting" component={Settings} />
                </Switch>

                <div className="container-fluid position-fixed w-100 h-100 d-flex align-items-end flex-row-reverse light-snippet">
                    <div className="row">
                        {
                            this.state.composeboxes.map((box, id) => <ComposeBox key={id} id={id} name={box.name} content={box.content} ismax={box.ismax}
                                onchange={this.onChange.bind(this)} updateParent={this.updateArray.bind(this)}
                                deleteBox={this.deleteBox.bind(this)} />)
                        }
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
