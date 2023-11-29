import React from 'react';
import { Link } from 'react-router-dom'

function TopBar(){
    return(
        <>
            <div className='tb-top'>
                <div className="logoslider">
                    <div className="logos">
                        <Link to={'/'} >
                            <img className='logo-phone' src={process.env.PUBLIC_URL + '/images/PHONE_UNTREF_LOGO.png'} alt="Logo UNTREF" width="90" height="30" />
                            <img className='logo-phone' src={process.env.PUBLIC_URL + '/images/PHONE_IMT_LOGO1.png'} alt="Logo IMT" width="67" height="30" />
                            <img className='logo' src={process.env.PUBLIC_URL + '/images/IMT_LOGO1.png'} alt="Logo IMT" width="120" height="60" />
                            <img className='logo' src={process.env.PUBLIC_URL + '/images/IMT_LOGO2.png'} alt="Logo UNTREF" width="154" height="60" />
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:'0'}}>
                <div className="container-fluid" style={{padding:'0'}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{padding:'0', justifyContent: 'center', background: 'linear-gradient(#24ABFF 0%, #0E4466 100%'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active link" aria-current="page" to={'/'}>Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle link" to={'/publicaciones'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                    Publicaciones
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/noticias'}>Noticias</Link></li>
                                    <li><Link className="dropdown-item" to={'/articulos'}>Artículos</Link></li>
                                    <li><Link className="dropdown-item" to={'/videos'}>Videos</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to={'/cursos'}>Cursos</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quienes Somos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/autoridades'}>Autoridades</Link></li> 
                                    <li><Link className="dropdown-item" to={'/nosotros/'}>Nosotros</Link></li> 
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopBar