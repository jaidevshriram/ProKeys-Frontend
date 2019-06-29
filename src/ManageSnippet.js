import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom Component
import Snippet from "./Snippet";
// import SnippetOptionsKey from './SnippetOptionsKey';
import Folder from "./Folder";

export default class ManageSnippet extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <div className="container pt-3">
                <div className="row">
                    <div className="col w-100">
                        <div className="light-outer-box-thick bg-primary">
                            <div className="light-inner-box p-4">


                                <div className="my-auto h-100 w-100 d-inline-block">
                                    <div className="h-100 pl-3 w-50 d-inline">
                                        <FontAwesomeIcon
                                            icon="search"
                                            className="light-search-icon"
                                        />
                                        &nbsp;
                                        &nbsp;
                                        <input
                                            className="form-control d-inline w-unset w-50"
                                            type="text"
                                            placeholder="Search Snippets"
                                        />
                                    </div>


                                    <div className="d-inline float-right">
                                        <span>Sort By:&nbsp;&nbsp;</span>

                                        <select className="d-inline w-unset form-control form-control-sm">
                                            <option>Name A-Z</option>
                                            <option>Name Z-A</option>
                                            <option>Date Ascending</option>
                                            <option>Date Descending</option>
                                        </select>

                                    </div>
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
