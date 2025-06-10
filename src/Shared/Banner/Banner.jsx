
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Banner.css'

const Banner = () => {

  const settings = {
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container container px-1 mx-auto">

      <Slider {...settings}>
        <div className="h-60 md:h-[420px] md:w-full text-center custom  bg-black bg-opacity-100">
          <div className="md:mt-40 mt-14 md:px-2  space-y-3 text-white">
            <h2 className="md:text-5xl text-2xl font-bold">Master New Skills Online</h2>
            <p className="text-gray-400 text-sm">Join our professional courses and unlock your potential from anywhere in the world.</p>
          </div>
        </div>

        <div className="h-60 md:h-[420px] md:w-full text-center custom2 bg-black bg-opacity-100">
          <div className="md:mt-40 mt-14 md:px-2 space-y-3 text-white">
            <h2 className="md:text-5xl text-2xl font-bold">Build Your Career with Certified Courses</h2>
            <p className="text-gray-400 text-sm">Enroll in industry-relevant courses and get certified by expert instructors.</p>
          </div>
        </div>

        <div className="h-60 md:h-[420px] md:w-full text-center custom3  bg-black bg-opacity-100">
          <div className="md:mt-40 mt-14 md:px-2  space-y-3 text-white">
            <h2 className="md:text-5xl text-2xl font-bold">Flexible Learning, Real Results</h2>
            <p className="text-gray-400 text-sm">Learn at your own pace, track your progress, and achieve your goals.</p>
          </div>
        </div>







      </Slider>

    </div>
  );
};

export default Banner;