import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/globals.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import API from '../libs/axios';

class MyApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      
        }
    }

  componentDidMount = () => {

  }

  render() {
    const { Component, pageProps } = this.props;
    return (   
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
    );
  }
}

export default MyApp;
