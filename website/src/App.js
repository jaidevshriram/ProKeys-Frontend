import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import GettingStarted from './GettingStarted';
 
export default class App extends React.Component {

  render() {

    var component;

    if(window.location.pathname == '/' || window.location.pathname == '/index' ) {
      component = <Hero/>;
    }
    else if (window.location.pathname === '/getting-started') {
      component = <GettingStarted />;
    }


    return (
      <React.Fragment>
        <Navbar />
        {component}
      </React.Fragment>
    );
  }

}