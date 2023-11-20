import React from 'react'
import { Link } from "react-router-dom";

function MainCoursesCard(props) {
  return (
    <Link className={`course-link ${props.className}`} to={`/post/${props.course.slug}/`} >
      <div className={'course-link-div'}>{props.course.title.rendered}</div>
    </Link>
  )
}

export default MainCoursesCard