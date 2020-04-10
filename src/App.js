import React, { Component } from 'react';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';
import './App.css'
export default class App extends Component {
 state={
      lat: null,
      lng: null,
      errorMessage: ""
    };
    
componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (position) =>this.setState({lat : position.coords.latitude, lng: position.coords.longitude}),
    (err) => this.setState({errorMessage: err.message})
    
  );
}
renderContent(){
  if(this.state.errorMessage && !this.state.lat && !this.state.lng){
    return <div>Error: {this.state.errorMessage}</div>
    }
  
    if(!this.state.errorMessage && this.state.lat && this.state.lng){
      return <SeasonDisplay lat={this.state.lat}/>
    }
  
    return <Spinner message="Please allow your location"/>
    
}
 render() {
  return (
    <div className="border red">
      {this.renderContent()}
    </div>
  )
  }
}
