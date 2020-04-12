/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import SeasonDisplay from './seasonDisplay';

import Spinner from './spinner';

import './App.css';

export default class App extends Component {
  state = {

    lat: null,

    lng: null,

    errorMessage: '',

  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(

      (position) => this.setState({

        lat: position.coords.latitude,

        lng: position.coords.longitude,

      }),

      (err) => this.setState({ errorMessage: err.message }),

    );
  }


  renderContent() {
    // destructured from this.state.errormessage to const {state} = this.state
    const { state } = this.state;
    if (state.errorMessage && !state.lat && !state.lng) {
      return (
        <div>
          Error:
          {state.errorMessage}
        </div>
      );
    }

    if (!state.errorMessage && state.lat && state.lng) {
      return <SeasonDisplay lat={state.lat} />;
    }

    return <Spinner message="Please allow your location" />;
  }


  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
