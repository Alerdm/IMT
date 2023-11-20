import React from 'react';
import NewsCarousel from './NewsCarousel';
import Columna from './Columna';
import MainCourses from './MainCourses';

function Main({posts}){
    const hasActiveCategory = posts.some(post => post.categories.includes("Activos") || post.categories.includes("Inscripciones Activas"));
    const activeInscriptions = posts.filter(course => course.categories.includes("Inscripciones Activas"))
    const activeCourses = posts.filter(course => course.categories.includes('Activos'))
    
    return(
        <div className='main'>
            <div className='news'><NewsCarousel posts={posts} /></div>
            {hasActiveCategory && (
                <div className='courses-news'>
                    <MainCourses courses={activeCourses} inscriptions={activeInscriptions} />
                </div>
            )}
            <div className='columnasMain'>
                <Columna titulo='Esta es columna izquierda' posts={posts} />
                <Columna titulo='Esta es mi columna columna' posts={posts} />
            </div>
        </div>
    )
}

export default Main