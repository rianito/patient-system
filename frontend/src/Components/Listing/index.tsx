import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
import UpdateBtn from "../ButtonActions/update";
import DeleteBtn from "../ButtonActions/delete";
import { toast } from "react-toastify";
import { Patient } from "../interfaces";

type Props = {
    setEditPatient: Function
    setEditMode : Function
}

export default function Listing({setEditPatient,setEditMode}:Props){

const [patients, setPatients] = useState<Patient[]>([]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/patients')
    .then(res => {setPatients(res.data)})
},[])

function deletePatient(patientId: number){
    axios.delete(`http://127.0.0.1:8000/patients/${patientId}`)
    .then(res => {
        setPatients(patients.filter((patient) => patient.id !== patientId));
        toast.info("Deletado com sucesso");
    })
    .catch(res => {
        toast.error("Não foi possivel deletar: ", res.name);
    })
}

    return(
    <>
        <div className="card">
            <div className="container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th className="Id">ID</th>
                            <th>Nome</th>
                            <th>Data de nascimento</th>
                            <th className="visitas">CPF</th>
                            <th className="sla">Peso</th>
                            <th>Altura</th>
                            <th>Sexo</th>
                            <th>Tipo Sanguineo</th>
                        </tr>
                    </thead>

                    <tbody>

                        
                        {patients.map(patient => {
                        return(
                        <tr key={patient?.id}>
                            <td className="show992">{patient?.id}</td>
                            <td>{patient?.name}</td>
                            <td className="date">{patient?.birth_date}</td>
                            <td className="show992">{patient?.cpf}</td>
                            <td>{patient?.weight} Kg</td>
                            <td className="show992">{patient?.height}A</td>
                            <td>{patient?.sex}</td>
                            <td>{patient?.blood_group}</td>
                            <td className="buttons">
                            <UpdateBtn patient={patient} setEditPatient={setEditPatient} setEditMode={setEditMode}/>
                            <DeleteBtn patientId={patient.id} deletePatient={deletePatient}/>
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