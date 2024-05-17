import React from 'react';
import TabelaAutor from './TabelaAutor.jsx';




function Autor() {




    return (
        <>
            <div className="container centralizacao">
                <div className="row position">
                    
                        <div className="flex-container-cabecalho position1">
                            <div className="cabecalhosAutor position2">Autor
                            </div>
                        </div>
                    </div>
                </div>
            
            <div >
                <TabelaAutor></TabelaAutor>
            </div>
        </>
    );
}

export default Autor;
