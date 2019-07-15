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
// selectNew(){
//   return this.state;
// }
  // componentWillMount() {
  //   fetch("https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete",{
  //     mode: "no-cors"})
  //     .then(({ data }) => {
  //       console.log(data);
  //     });
  // };
  
  // componentWillReceiveProps(nextProps) {
  //   console.log("nextProps", nextProps.mapContent);
  //   if (nextProps.mapContent !== this.props.mapContent) {
  //     let {selectedLat, selectedLng} = nextProps.mapContent;
  //     this.setState({
  //       selectedLng: selectedLat,
  //       selectedLng: selectedLng
  //   });
  //   // this.selectNew();
  //   console.log(this.state);
  //   }
  // }
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props, state);
  //   if (props.mapContent !== state.mapContent) {
  //     return {
  //       mapContent: props.mapContent,
  //     };
  //   }
  //   console.log(this.state);
  //   // Return null if the state hasn't changed
  //   return null;
  // }
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps, prevState);
    if (this.props.mapContent !== prevProps.mapContent) {
      this.setState({
        mapContent: this.props.mapContent,
        showingInfoWindow: false
      })
      this.updateSeachHistory(this.props.mapContent);
      console.log('MAP', this.map);
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
    updateSeachHistory = (mapData) => {
      if(this.state.searchHistory !== []){
        let searchHistory = this.state.searchHistory;
        searchHistory.push(mapData);
        this.setState({
          searchHistory : searchHistory
        });
        console.log(this.state);
      }
    }
  render() {
    return (
      <div ref="Map">
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
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);
  
//   Map.defaultProps = {
//     zoom: 14,
//     initialCenter: {
//       lat: 15.1393932,
//       lng: 76.92144280000002
//     },
//     centerAroundCurrentLocation: false,
//     visible: true
// };
  
   
