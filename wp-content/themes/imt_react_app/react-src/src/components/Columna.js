import React from 'react';

function Columna(props){
    return(
        <div className='columna' style={{paddingTop:'10px'}}>
            <h3 style={{color: 'white', backgroundColor:'grey'}}>{props.titulo}</h3>
            <h2>hola</h2>       
        </div>
    )
}

export default Columna