import React from 'react';
import $ from 'jquery';

//Custom Imports
import ComposeBox from './ComposeBox';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'fixed', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

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

        if(this.state.number <=2 ) {
        	this.state.composeboxes.unshift(newbox);
	        this.setState({
	            composeboxes: this.state.composeboxes,
	            number: this.state.number + 1,
	        });
	    }
	    else {
	    	window.$('#too-many-boxes').modal('show');
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
        this.setState({ composeboxes: newcomposeboxes, number: this.state.number -1, });
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