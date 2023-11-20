import React from 'react'
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function Topic(props) {
    const { slug } = useParams()
    const data = props.posts.filter(post => post.slug === `${slug}`).shift()


    console.log(data)

    if (data) {
        return(
            <div className='topic'>
                <div className='topic-head' style={{ backgroundImage: `url(${data.yoast_head_json.og_image[0].url})` }}>
                    <div className='topic-title-and-author'>
                        <div className='topic-title'>
                            <h1 style={{fontSize: '3.5rem'}}> {data?.title.rendered} </h1>
                        </div>
                        <div className='topic-author-and-date'>
                            <h2 style={{margin: '15px'}}> {data?.acf.autor1} </h2>
                            <h2 style={{margin: '15px'}}> {data?.acf.fecha} </h2>
                        </div>
                    </div>
                </div>
                <div className='topic-separator' />
                <div className='topic-text' dangerouslySetInnerHTML={{__html: data?.content.rendered}} />
            </div>
        )

     } else {
        return(
            <Loading /> 
        )
    }
}

export default Topic