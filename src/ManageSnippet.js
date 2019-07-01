import React from "react";
import Snippet from "./Snippet";
import Folder from "./Folder";
import { DATA, Generic } from "./data";

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

                                    <select className="d-inline w-unset form-control form-control-sm">
                                        <option>Name A-Z</option>
                                        <option>Name Z-A</option>
                                        <option>Date Ascending</option>
                                        <option>Date Descending</option>
                                    </select>

                                </div>

                                {
                                    DATA.snippets.list.map((object, index) => {
                                        if (object.type === Generic.FOLDER_TYPE) {
                                            return <Folder name={object.name} key={object.name + index} />;
                                        }
                                        return <Snippet name={object.name} key={object.name + index} body={object.body} />;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
