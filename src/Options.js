import React from "react";
import Button from "./Button";

export default class Options extends React.Component {
    render() {
        return (
            <div className="w-100 pt-5">
                <Button icon="plus" link="/" option="Manage Snippets"/>
                <Button icon="cog" link="/Setting" option="Settings"/>
                <Button icon="info" link="/About" option="About"/>
                <Button icon="question" link="/Help" option="Help"/>
            </div>
        );
    }
}
