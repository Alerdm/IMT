import React from "react";
import NewsCarouselCard from './NewsCarouselCard'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { EffectFade, Navigation, Autoplay } from "swiper";


function NewsCarousel(props){
  const onlyPosts = props.posts.filter(post => !post.categories.includes('Cursos'))

  return(
      <div className="nov-carousel"> 
        <Swiper
          autoplay={{delay: 6000, disableOnInteraction: false}}
          navigation={true}
          effect={"fade"}
          modules={[ Autoplay, EffectFade, Navigation ]}
          className="mySwiperNews"
        >
          {onlyPosts.slice(0, 7).map(post => (<SwiperSlide className="ss-news" key={post.slug} style={{backgroundImage: `url(${post.yoast_head_json.og_image[0].url})`}}> <NewsCarouselCard post={post} /> </SwiperSlide>))}
        </Swiper>
      </div>
  )
}
export default NewsCarousel