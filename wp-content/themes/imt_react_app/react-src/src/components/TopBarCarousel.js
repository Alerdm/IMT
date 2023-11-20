import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Autoplay, Pagination, Mousewheel } from "swiper";


function TopBarCarousel(){ 

  const imagesDir = []
  for (let i = 1; i < 16; i++) {
    imagesDir.push(process.env.PUBLIC_URL + `/images/historia/${i}.jpg`);
  }

  return(
      <> 
        <Swiper
          pagination={{type: "progressbar"}}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          centeredSlides={true}
          mousewheel={true}
          modules={[Autoplay, Pagination, Mousewheel]}
          className="tb-swiper"
        >
          {imagesDir.map(image => (<SwiperSlide className="tb-swiper-slide" key={image}> <img src={image} alt={image} /> </SwiperSlide>) )}
        </Swiper>
      </>
  )
}
export default TopBarCarousel