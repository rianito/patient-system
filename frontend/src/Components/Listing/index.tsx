import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import axios from "axios";
import './style.css';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import red from "@mui/material/colors/red";
import EditIcon from '@mui/icons-material/Edit';
import { indigo } from "@mui/material/colors";

export default function Listing(){

    type Sale = {
        id: number;
        sellerName: string;
        date: string;
        visited: number;
        deals: number;
        amount: number;
    }

const [sales, setSale] = useState<Sale[]>([]);

useEffect(() => {
    axios.get('https://joaodsmovie.herokuapp.com/movies')
    // .then(res => {setSale(res.data.content)})
    .then(res => {console.log(res.data.content);
    })
},[])

    return(
    <>
        <div className="card">
            <div className="container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th className="Id">ID</th>
                            <th>Data</th>
                            <th>Paciente</th>
                            <th className="visitas">Visitas</th>
                            <th className="sla">Sla</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td>Andrey</td>
                            <td>asdas</td>
                            <td>asdas</td>
                            <td className="buttons">
                                <Tooltip title="Editar">
                                    <IconButton>
                                        <EditIcon sx={{color: indigo[500]}}/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Deletar">
                                    <IconButton>
                                        <DeleteForeverRoundedIcon sx={{ color: red[500] }} />
                                    </IconButton>
                                </Tooltip>
                            </td>

                        </tr> */}

                        {
                        sales.map(sale => {
                        return(
                        <tr key={sale.id}>
                            <td className="show992">{sale.id}</td>
                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                            <td>{sale.sellerName}</td>
                            <td className="show992">{sale.visited}</td>
                            <td className="show992">{sale.deals}</td>
                            <td>R$ {sale.amount.toFixed(2)}</td>
                        </tr>
                        )
                        })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    </>
    )
    }