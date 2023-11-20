import React from 'react'
import { Link } from 'react-router-dom'

function PublicationsFeedCard({post}) {
  
  return (
    <Link to={`/post/${post.slug}/`} >
      <div>
        <img className={`ost-feed-card-img ${post.categories}`} src={post.yoast_head_json.og_image[0].url}/>
        {post.title.rendered}
      </div>
      <br/>
      <span class="material-symbols-outlined">calendar_month</span>
      {post.acf.fecha}
    </Link>
  )
}

export default PublicationsFeedCard