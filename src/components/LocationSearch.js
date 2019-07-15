import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
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
      selectedLng: '',
      searchHistory: []
      }
  };
  
  handleChange = address => {
    this.setState({ address });
  };
  
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.updateSeachHistory(address, latLng);
        this.setState({ 
          address: address,
          selectedLat : latLng.lat,
          selectedLng: latLng.lng
        });
        this.props.setData(this.state);
        this.props.getMapDetails(this.state);
      })
      .catch(error => console.error('Error', error))
  };
  updateSeachHistory = (address, latLng) => {
      let searchHistory = this.state.searchHistory;
      searchHistory.push({ 
        address: address,
        selectedLat : latLng.lat,
        selectedLng: latLng.lng
      });
      this.setState({
        searchHistory : searchHistory
      });
  }
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

const mapStateToProps = (state) => {
  return {
    storeData: state || []
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({ type: 'SEARCHED_LOCATION' , data: data} );
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( LocationSearchInput);