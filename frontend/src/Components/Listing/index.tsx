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

    // type Sale = {
    //     id: number;
    //     sellerName: string;
    //     date: string;
    //     visited: number;
    //     deals: number;
    //     amount: number;
    // }

    type Patient = {
        id:number
        name:string
        cpf:string
        birth_date:string
        height:Float32Array
        weight:Float32Array
        blood_type:string
        sex:string
    }

const [patient, setPatient] = useState<Patient[]>([]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/patients?skip=0&limit=10')
    .then(res => {setPatient(res.data)})
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

                        {patient.map(patient => {
                        return(
                        <tr key={patient.id}>
                            <td className="show992">{patient.id}</td>
                            <td className="date">{patient.birth_date}</td>
                            <td>{patient.name}</td>
                            <td className="show992">{patient.cpf}</td>
                            <td className="show992">{patient.height}</td>
                            <td>{patient.weight}</td>
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
                        </tr>
                        ) }) }


                    </tbody>

                </table>
            </div>
        </div>
    </>
    )
    }