import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Snippet from "./Snippet/Snippet";
import Folder from "./Snippet/Folder";
import { DATA, Generic } from "./data";

// Font Awesome

export default class ManageSnippet extends React.Component {
    getDOM() {
        const folder = DATA.snippets.getUniqueFolder(this.props.folder),
            highlightList = this.props.highlightList || [];

        if (folder.length === 0) {
            if (this.props.isSearchResultFolder) {
                return <p>No matches found</p>;
            }
            return <p>Empty folder</p>;
        }

        return folder.list.map((object, index) => {
            const keyVal = object.name + index,
                shouldHighlight = highlightList.indexOf(object.name) > -1;

            if (object.type === Generic.FOLDER_TYPE) {
                return <Folder name={object.name} key={keyVal}
                    count={{ folder: object.getFolderCount(), snip: object.getSnippetCount() }}
                    shouldHighlight={shouldHighlight} id={object.name}/>;
            }

            return <Snippet name={object.name} key={keyVal} body={object.body} id={object.name}/>;
        });
    }

    render() {
        return (
            <div className="h-100">
                <div className="container-fluid py-3">
                    <div className="row">
                        <div className="col">
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
                    </div>
                </div>

                {
                    this.getDOM()
                }
            </div>
        );
    }
}


ManageSnippet.propTypes = {
    folder: PropTypes.string,
    highlightList: PropTypes.arrayOf(PropTypes.string),
    isSearchResultFolder: PropTypes.bool,
};
