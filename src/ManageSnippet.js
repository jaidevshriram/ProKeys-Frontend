import React from "react";

// Custom Component
import Snippet from "./Snippet";
// import SnippetOptionsKey from './SnippetOptionsKey';
import Folder from "./Folder";

export default class ManageSnippet extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col w-100">
                        <div className="light-outer-box-thick bg-primary">
                            <div className="light-inner-box p-4">
                                
                                <div className="float-right">
                                    <span>Sort By:&nbsp;&nbsp;</span>
                                    
                                    <select class="d-inline w-unset form-control form-control-sm">
                                        <option>Name A-Z</option>
                                        <option>Name Z-A</option>
                                        <option>Date Ascending</option>
                                        <option>Date Descending</option>
                                    </select>
                                    
                                </div>

                                <br/><br/>
                                <Folder/>
                                <Folder/>
                                <Folder/>
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                                <Snippet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
