import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnippetTile from "./Snippet";
import FolderTile from "./Folder";
import { DATA, Generic } from "./data";

// Font Awesome

export default class FolderRender extends React.Component {
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
                return <FolderTile name={object.name} key={keyVal}
                    count={{ folder: object.getFolderCount(), snip: object.getSnippetCount() }}
                    shouldHighlight={shouldHighlight} id={object.name}/>;
            }

            return <SnippetTile name={object.name} key={keyVal} body={object.body} id={object.name}/>;
        });
    }

    render() {
        return (
            <div className="container">
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
    highlightList: PropTypes.arrayOf(PropTypes.string),
    isSearchResultFolder: PropTypes.bool,
};
