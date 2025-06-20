
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"
import './Banner.css'

const Banner = () => {

  const settings = {
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container overflow-hidden mt-9 px-1">

      <Slider {...settings}>
        <div className="h-60 md:h-[420px] w-full text-center rounded-lg custom bg-black bg-opacity-100">
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="md:mt-40 mt-14 md:px-2  space-y-3 text-white">
            <h2 className="md:text-5xl text-xl font-bold">Master New Skills Online</h2>
            <p className="text-gray-400 text-xs">Join our professional courses and unlock your potential from anywhere in the world.</p>
          </motion.div>
        </div>

        <div className="h-60 md:h-[420px] w-full text-center rounded-lg custom2 bg-black bg-opacity-100">
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="md:mt-40 mt-14 md:px-2 space-y-3 text-white">
            <h2 className="md:text-5xl text-xl font-bold">Build Your Career with Certified Courses</h2>
            <p className="text-gray-400 text-xs">Enroll in industry-relevant courses and get certified by expert instructors.</p>
          </motion.div>
        </div>

        <div className="h-60 md:h-[420px] w-full text-center rounded-lg custom3  bg-black bg-opacity-100">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="md:mt-40 mt-14 md:px-2  space-y-3 text-white">
            <h2 className="md:text-5xl text-xl font-bold">Flexible Learning, Real Results</h2>
            <p className="text-gray-400 text-xs">Learn at your own pace, track your progress, and achieve your goals.</p>
          </motion.div>
        </div>







      </Slider>

    </div>
  );
};

export default Banner;