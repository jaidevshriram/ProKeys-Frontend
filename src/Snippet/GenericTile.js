import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Generic } from "./data";
import TileFloatButton from "./TileFloatButton";

export default class GenericTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
        }
        this.folderTileDIV = React.createRef();
    }

    checkHighlight() {
        if (this.props.shouldHighlight) {
            this.folderTileDIV.classList.add(Generic.HIGHLIGHTING_CLASS);
            setTimeout(() => {
                this.folderTileDIV.removeClass(Generic.HIGHLIGHTING_CLASS);
            }, 3000);
        }
    }

    onClick = () => {
            this.setState({
                isClick: !this.state.isClick,
            })
    }

    render() {
        const ICON_NAME = this.props.type === Generic.FOLDER_TYPE ? "folder" : "file",
            element = <div className="d-inline-flex h-100 w-80 align-items-center light-snippet-preview" style={{ width: "800px" }}>
                <span className="d-inline-flex align-items-center font-weight-bold h-100 mx-2 text-black">
                    {this.props.name}
                </span>
                {this.props.longText}
            </div>,
            DOM = (
                <React.Fragment>
                    <div className="container-fluid w-100 light-folder-hover py-2" ref={this.folderTileDIV} onClick={this.onClick}>
                        <div className="row">
                            <div className="col w-100">
                                {
                                    this.state.isClick ? 
                                            <FontAwesomeIcon icon="check-square" color="#004782"/>
                                            : <span></span>
                                }
                                
                                <div className="d-inline h-100">
                                    <input type="checkbox" className="custom-control-input my-auto h-100" id={this.props.name} />

                                    <FontAwesomeIcon icon={["far", ICON_NAME]} size="2x" className="h-100 align-items-center ml-2" />

                                    {element}

                                    <div className="float-right my-2">
                                        <TileFloatButton type="Edit" />
                                        <TileFloatButton type="Delete" />
                                        <TileFloatButton type="Duplicate" />
                                        <TileFloatButton type="Move" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <hr className="m-1 text-dark" style={{ borderTop: "1px solid #ccc" }}/>

                </React.Fragment>
            );

        this.checkHighlight();

        return DOM;
    }
}

GenericTile.propTypes = {
    name: PropTypes.string,
    count: PropTypes.objectOf(PropTypes.number),
    shouldHighlight: PropTypes.bool,
    type: PropTypes.string,
    longText: PropTypes.string,
};
