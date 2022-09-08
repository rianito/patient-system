import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateBtn from "../ButtonActions/update";
import DeleteBtn from "../ButtonActions/delete";
import { toast } from "react-toastify";
import { Patient } from "../interfaces";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Box, Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { Container, margin, padding } from "@mui/system";
import { Helmet } from "react-helmet";
import NewPatient from "../ButtonActions/newPatient";

type Props = {
    setEditPatient: Function
    setEditMode: Function
}

export default function Listing({ setEditPatient, setEditMode }: Props) {

    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/patients')
            .then(res => { setPatients(res.data) })
    }, [])

    function deletePatient(patientId: number) {
        axios.delete(`http://127.0.0.1:8000/patients/${patientId}`)
            .then(res => {
                setPatients(patients.filter((patient) => patient.id !== patientId));
                toast.info("Deletado com sucesso");
            })
            .catch(res => {
                toast.error("Não foi possivel deletar: ", res.name);
            })
    }

    return (
        <>
            <Helmet>
                <title>Lista de pacientes</title>
            </Helmet>

            <Box mt={2} sx={{
                width: 'auto',
                marginLeft: 20,
                padding: 0.9,
                backgroundColor: '#e6e6e6',
                borderRadius: 3
            }}>
                <NewPatient setEditMode={setEditMode} setEditPatient={setEditPatient} />

                <Container>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Id</TableCell>
                                    <TableCell align="center">Nome</TableCell>
                                    <TableCell align="center">Data de Nascimento</TableCell>
                                    <TableCell align="center">CPF</TableCell>
                                    <TableCell align="center">Peso</TableCell>
                                    <TableCell align="center">Altura</TableCell>
                                    <TableCell align="center">Sexo</TableCell>
                                    <TableCell align="center">Tipo sanguineo</TableCell>
                                    <TableCell align="center">Obsevação</TableCell>
                                    <TableCell align="center">Editar</TableCell>
                                    <TableCell align="center">Deletar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patients.map(patient => {
                                    return (
                                        <TableRow>
                                            <TableCell align="center">{patient?.id}</TableCell>
                                            <TableCell align="center">{patient?.name}</TableCell>
                                            <TableCell align="center">{(patient?.birth_date).split('-').reverse().join().replaceAll(',', '/')}</TableCell>
                                            <TableCell align="center">{(patient?.cpf).replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")}</TableCell>
                                            <TableCell align="center">{patient?.weight}</TableCell>
                                            <TableCell align="center">{patient?.height}</TableCell>
                                            <TableCell align="center">{patient?.sex}</TableCell>
                                            <TableCell align="center">{patient?.blood_group}</TableCell>
                                            <TableCell align="center">{patient?.observation}</TableCell>
                                            <TableCell><UpdateBtn patient={patient} setEditPatient={setEditPatient} setEditMode={setEditMode} /></TableCell>
                                            <TableCell><DeleteBtn patientId={patient.id} deletePatient={deletePatient} /></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </>
    )
}