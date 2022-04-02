import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div
            className="slide"
            style={{
              width: "500px",
              height: "300px",
              backgroundColor: "red",
            }}
          >
            1
          </div>
          <div className="slide">2</div>
          <style global jsx>{`
            .slick-list {
              width: 800px;
              height: 300px;
              background-color: orange;
            }
          `}</style>
        </Slider>
      </>
    );
  }
}
