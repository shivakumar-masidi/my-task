import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
import { searchedLocation } from '../actions/searchedLocation'
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

export class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      selectedLat: '',
      selectedLng: ''
      }
    };
 
  handleChange = address => {
    this.setState({ address });
  };
  
  handleSelect = address => {
    this.setState({address: address});
    
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ 
          selectedLat : latLng.lat,
          selectedLng: latLng.lng
        })
        console.log('Success', latLng)
        console.log(this.state)
        this.props.getMapDetails(this.state)
      })
      .catch(error => console.error('Error', error))
  };

  render() {
    return (
      <div>
       <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        className="form-group"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="form-group">
            <input
              {...getInputProps({
                //placeholder: 'Search Places ...',
                className: 'location-search-input form-control',
                type:'search', 
                id:'location'
              })}
            />
            <label className="form-control-placeholder" htmlFor="location">Search Location</label>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
    );
  }
}

export default connect(
  state => ({
    searchedLocation: state.fetchingData,
  }), {
    searchedLocation
  })(LocationSearchInput);