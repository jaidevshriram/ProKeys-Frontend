import React from "react";
import { PropTypes } from "prop-types";
import SnippetTile from "./Snippet";
import FolderTile from "./Folder";
import { DATA, Generic } from "./data";

export default class FolderRender extends React.Component {
    getDOM() {
        const folder = DATA.snippets.getUniqueFolder(this.props.folder);

        if (folder.length === 0) {
            return <p>Empty folder</p>;
        }

        return folder.list.map((object, index) => {
            if (object.type === Generic.FOLDER_TYPE) {
                return <FolderTile name={object.name} key={object.name + index}
                    count={{ folder: object.getFolderCount(), snip: object.getSnippetCount() }} />;
            }

            return <SnippetTile name={object.name} key={object.name + index} body={object.body} />;
        });
    }

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
                                    this.getDOM()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


FolderRender.propTypes = {
    folder: PropTypes.string,
};
