import React from 'react';

import Intro from './Intro';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    }
  }

  next = () => {
    this.setState({
      progress: this.state.progress + 1,
    })
  }

  previous = () => {
    this.setState({
      progress: this.setState.progress - 1,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col">

              <div className="d-inline-flex justify-content-center w-100 py-5">
                <h1 className="font-weight-bold">Welcome to ProKeys!</h1>
              </div>

              <div className="container h-75">
                <div className="row h-100">
                  <div className="col">
                    <div className="light-outer-box h-100">
                      <div className="light-inner-box p-4">
                        <div className="d-flex h-100 w-100 pt-3 justify-content-center">
                          <div className="container-fluid">
                            <div className="row h-100">
                              <div className="col text-center">
                                <Intro />
                                <div className="d-flex mt-5 px-3">
                                  <div className="p-2">
                                    <button className="btn btn-warning" onClick={this.previous}>
                                      Previous
                                    </button>
                                  </div>
                                  <div className="ml-auto p-2">
                                    <button className="btn btn-success" onClick={this.next}>
                                      Next
                                    </button>
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
