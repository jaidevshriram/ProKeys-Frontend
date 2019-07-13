import React from 'react';

import Intro from './Intro';
import Placeholders from './Placeholders';
import Folders from './Folders';
import ControlData from './ControlData';
import Sync from './Sync';
import Bonus from './Bonus';
import Welcome from './Welcome';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      states: 6,
    }
  }

  next = () => {
    this.setState({
      progress: this.state.progress + 1,
    })
  }

  previous = () => {
    this.setState({
      progress: this.state.progress - 1,
    })
  }

  render() {

    let component = <React.Fragment></React.Fragment>;

    switch(this.state.progress) {
      case 0: component = <Welcome/>; break;
      case 1: component = <Intro value={100 - 6*100/6}/>; break;
      case 2: component = <Placeholders value={100 - 5*100/6}/>; break;
      case 3: component = <Folders value={100 - 4*100/6}/>; break;
      case 4: component = <ControlData value={100 - 3*100/6}/>; break;
      case 5: component = <Sync value={100 - 2*100/6}/>; break;
      case 6: component = <Bonus value={100 - 1*100/6}/>; break;
      default: break;
    }

    return (
      <React.Fragment>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col d-flex align-items-center">
              <div className="container align-items-center h-75">
                <div className="row h-100">
                  <div className="col">
                    <div className="light-outer-box h-100">
                      <div className="light-inner-box p-4">
                        <div className="d-flex h-100 w-100 pt-3 justify-content-center">
                          <div className="container-fluid">
                            <div className="row h-100">
                              <div className="col text-center pointer-all">
                                {component}
                                <div className="d-flex mt-5 px-3">
                                  <div className="p-2">
                                    {
                                      this.state.progress != 0 ?
                                       ( <button className="btn btn-warning" onClick={this.previous}>
                                          Previous
                                        </button> )

                                       : <div></div>
                                    }
                                  </div>
                                  <div className="ml-auto p-2">
                                    {
                                      this.state.progress != 0 && this.state.progress != 7 ?
                                       ( <button className="btn btn-success" onClick={this.next}>
                                          Next
                                        </button> )

                                       : 
                                            this.state.progress == 0 ? 
                                            ( <button className="btn btn-success" onClick={this.next}>
                                              Start !
                                            </button> )

                                            : <div/> 
                                       
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
