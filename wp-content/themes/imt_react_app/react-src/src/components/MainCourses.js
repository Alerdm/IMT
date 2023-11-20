import React from 'react'
import MainCoursesCard from './MainCoursesCard';

function MainCourses({courses, inscriptions}) {
  const renderTwoCourses = courses.length >= 2;
  const renderTwoInscriptions = inscriptions.length >= 2;
  const showSplitter = courses.length > 0 && inscriptions.length > 0;

  return (
    <>
      {renderTwoInscriptions ? (
        <>
          <div className='courses-inscriptions-main-title'>Inscripciones Activas</div>
          <div className='courses-inscriptions-main'>
            <MainCoursesCard course={inscriptions[0]} className="course-card-l" />
            <div className="splitter-line"></div>
            <MainCoursesCard course={inscriptions[1]} className="course-card-r" />
          </div>
        </>
      ) : (
        <>
          <div className='courses-inscriptions-main-title'>Inscripciones Activas</div>
          <div className='courses-inscriptions-main'>
            <MainCoursesCard course={inscriptions[0]} />
          </div>
        </>
      )}

      {showSplitter && <div className="courses-inscriptions-splitter"></div>}

      {renderTwoCourses ? (
        <>
          <div className='courses-inscriptions-main-title'>Cursos Activos</div>
          <div className='courses-inscriptions-main'>
            <MainCoursesCard course={courses[0]} className="course-card-l" />
            <div className="splitter-line"></div>
            <MainCoursesCard course={courses[1]} className="course-card-r" />
          </div>
        </>
      ) : (
        <>
          <div className='courses-inscriptions-main-title'>Cursos Activos</div>
          <div className='courses-inscriptions-main'>
            <MainCoursesCard course={courses[0]} />
          </div>
        </>
      )}
    </>
  )
}

export default MainCourses