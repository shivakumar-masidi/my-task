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
    this.setState({mapContent: data})
  }
  render() {
    return (
      <React.Fragment>
        <div>
        <header className="py-4">
          <div className="container">
            <nav className="d-lg-flex">
              <label htmlFor="drop" className="toggle"><span className="fa fa-bars" aria-hidden="true">Menu</span></label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2 ml-auto">
                <li className=""><a href="#home">Home</a></li>
                <li className=""><a href="#mapcontent">Location Search</a></li>
              </ul>
              <div className="login-icon ml-lg-2">
                <a className="user" href="#popup1"> Login</a>
              </div>
            </nav>
            <div className="clear"></div>
          </div>
        </header>
        <div className="banner" id="home">
          <div className="container">
            <div className="row banner-text">
              <div className="slider-info col-lg-6">
                <div className="banner-info-grid mt-lg-5">
                  <h2>Welcome To Location Explorer... </h2>
                  <p>My application lets you to explore places in google map.. </p>
                  <p>Happy Exploring.. </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 mt-lg-0 mt-sm-5 mt-3 banner-image text-lg-center">
                {/* <img src="../images/globe.jpg" alt="" className="img-fluid"/> */}
              </div>
            </div>
          </div>
        </div>
        <section className="about min-container-height" id="mapcontent">
          <div className="container py-lg-5 py-sm-3">
            <div className="col-lg-12 about-left">
              <h4 className="heading mb-lg-5 mb-4">Location Search</h4>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 about-text">
                <SearchComponent mapContent={this.mapContent}/>
              </div> 
              <div className="col-lg-6 col-md-6 col-sm-12">
                <MapContainer mapContent={this.state.mapContent}/>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-emp-w3ls py-5">
          <div className="container pt-lg-3">
            <div className="row footer-top">
              <div className="col-lg-3 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
                <h3 className="footer-title text-uppercase mb-4">Contact Deveoper</h3>
                <div className="contact-info">
                  <div className="footer-style-w3ls">
                    <h4 className="mb-2"> <span className="fa mr-1 fa-map-marker"></span> Details</h4>
                    <p>Senior Developer, OMR , Karapakkam, Chennai - India </p>
                  </div>
                  <div className="footer-style-w3ls my-3">
                    <h4 className="mb-2"><span className="fa mr-1 fa-phone"></span> Phone</h4>
                    <p>+91 7401545592</p>
                  </div>
                  <div className="footer-style-w3ls">
                    <h4 className="mb-2"><span className="fa mr-1 fa-envelope-open"></span> Email</h4>
                    <p><a href="mailto:mshivakumar.bly@gmail.com">mshivakumar.bly@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
                <h3 className="footer-title text-uppercase mb-4">Quick Links</h3>
                <ul className="links list-unstyled">
                  <li>
                    <a className="" href="#home"> Home</a>
                  </li>
                  <li>
                    <a className="" href="#mapcontent"> Location Search</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="move-top text-right">
        <a href="#home" className="move-top"> 
          <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
        </a>
        </div>
          <div id="popup1" className="popup-effect">
            <div className="popup">
              <div className="login px-sm-4 mx-auto mw-100">
                <h5 className="text-center mb-4">Login to Digital</h5>
                <form action="#" method="post">
                  <div className="form-group">
                    <label className="mb-2">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required="" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label className="mb-2">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required=""/>
                  </div>
                  <button type="submit" className="btn btn-primary submit mt-2">Login</button>
                  <p className="text-center mt-2">
                    <a href="#popup2"> Don't have an account?</a>
                  </p>
                </form>
              </div>

              <a className="close" href="#home">&times;</a>
            </div>
          </div>
          <div id="popup2" className="popup-effect">
            <div className="popup">
              <div className="login px-sm-4 mx-auto mw-100">
                <h5 className="text-center mb-4">Register Now</h5>
                <form action="#" method="post">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="" required="" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="validationDefault02" placeholder="" required="" />
                  </div>
                  <div className="form-group">
                    <label className="mb-2">Password</label>
                    <input type="password" className="form-control" id="password1" placeholder="" required="" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="password2" placeholder="" required="" />
                  </div>

                  <button type="submit" className="btn btn-primary submit">Register</button>
                  <p className="text-center mt-3">
                    <a href="#home">By clicking Register, I agree to your terms</a>
                  </p>
                </form>
              </div>
              <a className="close" href="#home">&times;</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Dashboard;