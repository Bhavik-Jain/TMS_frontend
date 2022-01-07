import React from "react";
import Carousel from "react-multi-carousel";
import "../../styles/with_scrollbar.css";
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        <div class="image-container increase-size">
          <a href="/package_preview/0">
          <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7DTarLSL6QWdfi3LRLA1QpsU2UxyKLE6FQ&usqp=CAU" /> 
           </a>
        </div>
        <div class="increase-size">
          {/* <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          /> */}
         <a href="/package_preview/1"> 
         <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80yVGAspZcYUA5-v5HPN9BGqmwG6xKPyH5g&usqp=CAU" />  
           </a>
        </div>

        <div class="image-container increase-size">
          {/* <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          /> */}
           <a href="/package_preview/2"> 
          <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src= "http://www.excitingindia.in/wp-content/uploads/2014/08/goa-720x415.jpg" />
           </a>
        </div>

        <div class="image-container increase-size">
          <a href="/package_preview/3"> 
         <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src= "https://cdn1.tripoto.com/media/filter/nxxl/img/1429685/Image/1573741940_manali.jpg" />  
           </a>
        </div>

        <div class="image-container increase-size">
        <a href="/package_preview/4"> 
         <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src= {img2} />  
           </a>
        </div>
        <div class="image-container increase-size">
        <a href="/package_preview/5"> 
         <img 
           draggable={false}
           style={{ width: "100%", cursor: "pointer" }}
           alt="Image" src= {img3} /> 
           </a> 
        </div>
      </Carousel>
    );
  }
}

export default WithScrollbar;
