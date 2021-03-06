import React, { Component } from 'react';
import {BannerUrl} from '../libs/urls';
import {Carousel} from 'react-bootstrap';
import Slider from "react-slick";

const url = BannerUrl();

class Slideshow extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        const settings = {
            className: "",
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
          };
        const ListSlider = this.props.data.map((s, index) => (
            <Carousel.Item key={s.ID_BANNER}>
                <img 
                className="d-block w-100"
                src={url+s.GAMBAR}
                alt={s.TEKS}
                style={{minHeight: '100px'}}
                />
            </Carousel.Item>

        ));
        return (
            <div className="row">
<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <Carousel>
                
                {ListSlider}
               
            </Carousel>
            </div>
                </div>
        )
    }
}

export default Slideshow