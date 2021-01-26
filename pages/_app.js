import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/argon-design-system.css';
import '../styles/css/styles.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
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
