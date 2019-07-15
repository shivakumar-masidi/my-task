import React, { Component } from 'react';
import MapContainer from './MapContainer';
import SearchComponent from './Search';

 
export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      mapContent: {}
    }
  }
  mapContent = (data) => {
    console.log("dashboard js data ", data);
    this.setState({mapContent: data})
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid jumbotron viewport-height">
          <div className="row">
            <div className="col">
              <SearchComponent mapContent={this.mapContent}/>
            </div>
            <div className="col">
              <MapContainer mapContent={this.state.mapContent}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Dashboard;