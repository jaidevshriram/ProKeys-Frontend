import React from "react";

export default class AdvancedSettings extends React.Component {
    render() {
        return (
            <div className="w-100">
                <hr className="pt-1"/>
                <div className="">
                    <span className="h3 font-weight-bold">Tab Key</span>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="pt-2 text-justified">Should Tab Key insert 4 spaces by default?</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-muted float-right text-right">Default varies from system to system</p>
                        </div>
                    </div>

                    <hr className="pt-1"/>

                    <span className="h3 font-weight-bold">Smart Bracketing</span>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="pt-2 text-justified">Wrap highlighted (selected) text in brackets by just clicking on the desired bracket.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-muted float-right text-right">Eg: highlighting &apos;Sample&apos; followed by a click on &apos;)&apos; converts the text to &apos;(Sample)&apos;</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
