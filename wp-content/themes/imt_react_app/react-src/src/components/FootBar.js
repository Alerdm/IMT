import React from 'react';

function FootBar(){
    return(
        
        <div className="footbar" style={{ backgroundColor: 'black'}}>
            <div style={{ display:'flex' }}>
                <p style={{ fontSize:'1rem', color: 'white', margin:'11px auto' }}>Derechos Reservados &copy; {new Date().getFullYear()}</p>
            </div>
            <div className="footbar-info-section">
                <div className='footbar-info-section-box'>
                    <p>Locación</p>
                    <p>telefono</p>
                    <p>mail</p>
                    <p>redes sociales</p>
                </div>
                <div className='footbar-info-section-box'>
                    <p>otros sitios</p>
                </div>
                <div className='footbar-info-section-box'>
                    <p>Informacion extra</p>
                </div>
            </div>
        </div>
    )
}

export default FootBar