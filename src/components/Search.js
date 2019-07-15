import React, { Component } from 'react';
import LocationSearchInput from './LocationSearch';

export class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSeach: false,
            showHistory:  false,
            address: ''
        }
        //this.onChange = (address) => this.setState({ address })
        this.toggleSearchHistory = this.toggleSearchHistory.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }
    toggleSearchHistory (){
        this.setState(state => ({
            toggleSeach: !state.toggleSeach
        }));

    }
    // handleChange(event) {
    //     this.setState({address: event.target.value});
    //     console.log(this.state.address);
    //  } 
    getMapDetails = (data) => {
        console.log("search js data ", data);
        this.props.mapContent(data)
    }


  render() {
    const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
        // onBlur: () => {
        //     console.log('blur!')
        // },
        type: 'search',
        placeholder: 'Search Places...',
        autoFocus: true,
      }
    return (
      <React.Fragment>
        <LocationSearchInput inputProps={inputProps} getMapDetails={this.getMapDetails} />
        {/* <div className="form-group col-sm-12 col-md-8">
            <input type="text" id="location" className="form-control" required value={this.state.address} onChange={this.handleChange}/>
            <label className="form-control-placeholder" htmlFor="location">Search Location</label>
        </div> */}
        <div className="col-sm-12 col-md-8">
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".collapse-search" aria-expanded="false" onClick={this.toggleSearchHistory}>{this.state.toggleSeach ? 'Hide Search History' : 'Show Search History'}</button>
            <div className="collapse collapse-search" id="multiCollapseExample2">
                <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchComponent;