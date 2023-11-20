import React from 'react'
import ActiveSection from './ActiveSection'
import { Link, useLocation } from 'react-router-dom'

const Publications = ({defaultSection, posts}) => {

  const location = useLocation();
  const [section, setSection] = React.useState(defaultSection ?? 'noticias')
  React.useEffect( () => {
    // Actualiza la sección basada en la ruta actual
    const path = location.pathname;
    if (path === '/noticias') {
      setSection('noticias');
    } else if (path === '/articulos') {
      setSection('articulos');
    } else if (path === '/cursos') {
      setSection('cursos');
    } else if (path === '/videos') {
      setSection('videos');
    }
  }, [location.pathname])
  
  return (
    <>
      <nav className='publications-nav' >
        <Link to={'/noticias'}><button className={section === 'noticias' ? 'active' : ''}>Noticias</button></Link>
        <Link to={'/articulos'}><button className={section === 'articulos' ? 'active' : ''}>Articulos</button></Link>
        <Link to={'/videos'}><button className={section === 'videos' ? 'active' : ''}>Videos</button></Link>
        <Link to={'/cursos'}><button className={section === 'cursos' ? 'active' : ''}>Cursos</button></Link>
        {/* otros botones */}
      </nav>
      <section>
        <ActiveSection section={section} posts={posts} />
      </section>
    </>
  )
}

export default Publications