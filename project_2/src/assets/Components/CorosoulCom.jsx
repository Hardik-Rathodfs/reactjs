import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function CorosoulCom() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="im1"
            src="https://preview.colorlib.com/theme/travelo/img/banner/banner3.png.webp"
            alt=""
          />
          <Carousel.Caption>
            <div class="slider_text text-center">
              <h3>Switzerland</h3>
              <p>Pixel perfect design with awesome contents</p>
              <button className="boxed-btn3">Explore Now</button>
            </div>
            {/* <Button variant="info">Explore Now</Button>{''} */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="im1"
            src="https://preview.colorlib.com/theme/travelo/img/banner/banner.png.webp"
            alt=""
          />
          <Carousel.Caption>
            <div class="slider_text text-center">
              <h3>Indonesia</h3>
              <p>Pixel perfect design with awesome contents</p>
              <button className="boxed-btn3">Explore Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="im1"
            src="https://preview.colorlib.com/theme/travelo/img/banner/banner2.png.webp"
            alt=""
          />
          <Carousel.Caption>
            <div class="slider_text text-center">
              <h3>Australia</h3>
              <p>Pixel perfect design with awesome contents</p>
              <button className="boxed-btn3">Explore Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="where_togo_area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="form_area">
                <h3>Where you want to go?</h3>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="search_wrap">
                <form class="search_form" action="#">
                  <div class="input_field">
                    <input type="text" placeholder="Where to go?" />
                  </div>
                  <div class="input_field">
                    <input type="date" id="datepicker" placeholder="Date" />
                  </div>
                  <div class="input_field">
                    <select className="sec">
                      <option data-display="Travel type">Travel type</option>
                      <option value="1">Some option</option>
                      <option value="2">Another option</option>
                    </select>
                  </div>
                  <div class="search_btn">
                    <button class="boxed-btn4 " type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorosoulCom;
