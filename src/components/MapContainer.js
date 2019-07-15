import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyle = {
  height: '500px'
}
class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      mapContent: {
        address: '',
        selectedLat: 15.1393932,
        selectedLng: 76.92144280000002
      },
      activeMarker: {},
      selectedPlace: {},
      searchHistory: []
    }
} 
  componentDidUpdate(prevProps, prevState) {
    if (this.props.mapContent !== prevProps.mapContent) {
      this.setState({
        mapContent: this.props.mapContent,
        showingInfoWindow: false
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyle}
        initialCenter={{ lat:this.state.mapContent.selectedLat, lng:this.state.mapContent.selectedLng }}
        center={{lat:this.state.mapContent.selectedLat, lng:this.state.mapContent.selectedLng}}
      >
      <Marker position= {{lat:this.state.mapContent.selectedLat , lng:this.state.mapContent.selectedLng }} onClick={this.onMarkerClick}
                name={this.state.mapContent.address}/>
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <p>{this.state.mapContent.address}</p>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: '<YOUR API KEY>'
  })(MapContainer);
  
  
   
