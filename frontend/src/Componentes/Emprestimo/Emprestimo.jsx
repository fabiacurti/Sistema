import React from 'react';
import TabelaEmprestimo from './TabelaEmprestimo.jsx';
import './EmprestimoCont.css'




function Emprestimo() {




    return (
        <>
            
                    <div className="ConteinerEmprest">
                        <div className="cabecalhosEmprest">
                            <div className="cor_fonte" style={{ }}>Emprestimo
                            </div>
                        </div>
                    </div>
            <div >
                <TabelaEmprestimo></TabelaEmprestimo>
            </div>
        </>
    );
}

export default Emprestimo;
