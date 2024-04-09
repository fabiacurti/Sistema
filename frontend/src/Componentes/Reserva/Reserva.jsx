import React from 'react';
import TabelaReserva from './TabelaReservaLivro.jsx';




function Reserva() {

    return (
        <>
            <div className="container centralizacao">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                        <div className="flex-container-cabecalho">
                            <div className="cabecalho" style={{ }}>Reserva
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <TabelaReserva></TabelaReserva>
            </div>
        </>
    );
}

export default Reserva;
