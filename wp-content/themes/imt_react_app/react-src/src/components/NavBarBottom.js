import React from "react";
import { Link } from 'react-router-dom'

function NavBarBottom(props) {
    return(
        <div className="nv-bottom">
            <div className="nv-bottom-wrap">
                <div className="nv-bottom-bt">
                    <Link to={'/'}>
                        <span class="material-symbols-outlined">home</span>
                        <p>Inicio</p>
                    </Link>
                </div>
                <div className="nv-bottom-bt">
                    <Link to={'/noticias'}>
                        <span class="material-symbols-outlined">view_cozy</span>
                        <p>Publicaciones</p>
                    </Link>
                </div>
                <div className="nv-bottom-bt">
                    <Link to={'/autoridades'}>
                        <span class="material-symbols-outlined">group</span>
                        <p>Autoridades</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBarBottom