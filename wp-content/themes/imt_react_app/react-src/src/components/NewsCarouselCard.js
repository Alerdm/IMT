import React from 'react'
import { Link } from "react-router-dom";

function NewsCarouselCard(props) {

  return (
      <Link className="news-link" to={`/post/${props.post.slug}/`} >
        <div className='news-link-card'>
          <h5>{props.post.categories[0]}</h5>
          <h1>{props.post.title.rendered}</h1>
        </div>
      </Link>
    )

}

export default NewsCarouselCard