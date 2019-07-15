import React, { Component } from 'react';
import LocationSearchInput from './LocationSearch';
import { connect } from 'react-redux';

export class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSeach: false,
            showHistory:  false,
            address: '',
            searchedHistory: []
        }
        this.toggleSearchHistory = this.toggleSearchHistory.bind(this);
    }
    toggleSearchHistory (){
        this.setState(state => ({
            toggleSeach: !state.toggleSeach,
            searchedHistory: this.props.storeData.searchHistory
        }));
    }
    getMapDetails = (data) => {
        this.props.mapContent(data)
    }

  render() {
    const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
        type: 'search',
        placeholder: 'Search Places...',
        autoFocus: true,
      }
    return (
      <React.Fragment>
        <LocationSearchInput inputProps={inputProps} getMapDetails={this.getMapDetails} />
        <div className="col-sm-12 col-md-8">
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".collapse-search" aria-expanded="false" onClick={this.toggleSearchHistory}>{this.state.toggleSeach ? 'Hide Search History' : 'Show Search History'}</button>
            <div className="collapse collapse-search" id="multiCollapseExample2">
                <div className="card card-body">
                   {this.state.searchedHistory.length > 0 ?
                    this.state.searchedHistory.map((x, i) => <ul key={i}><li>{x.address}</li></ul>) : 'No Search History'
                }
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      storeData: state || []
    };
  }
  export default connect(mapStateToProps, false)( SearchComponent);