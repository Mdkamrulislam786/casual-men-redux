import React, { Component } from "react";
import "./Layout.css";
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/Footer'


class Layout extends Component {

  render() {
    return (
      <>
       <Header/>
        {this.props.children}
        <Footer/>
      </>
    );
  }
}
export default Layout;
