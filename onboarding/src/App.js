import React from 'react';

import Intro from './Intro';
import Placeholders from './Placeholders';
import Folders from './Folders';
import ControlData from './ControlData';
import Sync from './Sync';
import Bonus from './Bonus';
import Welcome from './Welcome';
import End from './End';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      states: 6,
    };
    this.componentsInOrder = [
      Welcome,
      Intro,
      Placeholders,
      Folders,
      Sync,
      ControlData,
      Bonus,
      End,
    ];
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
    let ComponentName = this.componentsInOrder[this.state.progress],
      component = <ComponentName progress={this.state.progress} />;

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
                                      this.state.progress !== 0 ?
                                        (<button className="btn btn-warning" onClick={this.previous}>
                                          Previous
                                        </button>)

                                        : <div></div>
                                    }
                                  </div>
                                  <div className="ml-auto p-2">
                                    {
                                      this.state.progress !== 0 && this.state.progress !== 7 ?
                                        (<button className="btn btn-success" onClick={this.next}>
                                          Next
                                        </button>)

                                        :
                                        this.state.progress === 0 ?
                                          (<button className="btn btn-success" onClick={this.next}>
                                            Start!
                                            </button>)

                                          : <div />

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
