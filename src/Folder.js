import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Folder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }

        this.value = {
            name: props.name
        }
    }

    editmode = () => {
        this.setState({
            isEdit: true
        })
    }

    doneEditing = (e) => {
        if(e.which == 13){
            this.setState({
                isEdit: false,
            })
        }
    }

    stopEditing = (e) => {
                    console.log(e);
        if( this.state.isEdit == true && (e.explicitOriginalTarget.localName != "input" ? e.explicitOriginalTarget.title == "folder-name" : e.explicitOriginalTarget.title != "folder-name") ) {

            this.setState({
                isEdit: false,
            })
        }
    }

    componentDidMount() {
        window.addEventListener("keypress", this.doneEditing);
        window.addEventListener("click", this.stopEditing);
    }

	render () {
		return (
            <React.Fragment>
                <div className="container p-3 w-100 light-folder-hover">
                    <div className="row">
                        <div className="col w-100">
                            <FontAwesomeIcon icon={['far','folder']} size="2x" className="my-auto"/>
                            <span className="pl-5 my-auto">

    	                            {   !this.state.isEdit ?

                                        <span className="pr-5 d-inline font-weight-bold h4 my-auto" onDoubleClick={this.editmode}>
            	                           		{this.value.name}
            	                       </span>
                                        
                                        :    <input className="form-control w-unset d-inline" defaultValue={this.value.name} title="folder-name"/>
                                        
                                    }

	                            <p className="d-inline light-snippet-preview float-right my-auto">
	                                2 Snippets. 0 Folders
	                            </p>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="m-1"/>
            </React.Fragment>
        );
	}
}