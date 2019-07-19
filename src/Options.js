import React from "react";
import Button from './Button';

// export default class Options extends React.Component {
//     render() {
//         return (
//             <div className="container p-3">
//                 <div className="row">
//                     <div className="col text-center">

//                         <ButtonCircle icon="plus" link="/" />
//                         Snippet
//                     </div>
//                     <div className="col text-center">
//                         <ButtonCircle icon="cog" link="/Setting" />
//                         Setting
//                     </div>
//                     <div className="col text-center">
//                         <ButtonCircle icon="info" link="/About" />
//                         About
//                     </div>
//                     <div className="col text-center">
//                         <ButtonCircle icon="question" link="/Help" />
//                         Help
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


export default class Options extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button icon="plus" link="/" option="Manage Snippets"/>
                <Button icon="cog" link="/Setting" option="Settings"/>
                <Button icon="info" link="/About" option="About"/>
                <Button icon="question" link="/Help" option="Help"/>
            </React.Fragment>
        );
    }
}