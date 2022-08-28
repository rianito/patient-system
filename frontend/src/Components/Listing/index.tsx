import React from "react";
import edit_icon from '../../assets/imgs/edit-svgrepo-com.svg';
import delete_icon from '../../assets/imgs/delete-svgrepo-com.svg';
import './style.css';

function Listing(){
return(
<>
    <div className="card">


        <div className="container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th className="Id">ID</th>
                        <th className="data">Data</th>
                        <th>Vendedor</th>
                        <th className="visitas">Visitas</th>
                        <th className="Vendas">Vendas</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>asdas</td>
                        <td>asdas</td>
                        <td>asdas</td>
                        <td>asdas</td>
                        <td>asdas</td>
                        <td className="buttons">
                            <button className="update-btn">
                            <img src={edit_icon} alt="" />
                            </button>
                            
                            <button className="delete-btn">
                            <img src={delete_icon} alt="" />
                            </button>
                        </td>
                        
                    </tr>

                    


                </tbody>

            </table>
        </div>
    </div>
</>
)
}

export default Listing