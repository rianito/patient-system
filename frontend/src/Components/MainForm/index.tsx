import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  Typography,
  TextField,
  InputLabel,
  TextareaAutosize,
  SelectChangeEvent
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { Helmet } from "react-helmet";
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, Patient } from '../interfaces';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, Routes } from 'react-router-dom';
import './style.css'

type Props = {
  editMode: boolean
  editPatient: Patient
  setEditPatient: Function
  setEditMode: Function
}

export default function Formizho({ editMode, setEditMode, editPatient, setEditPatient }: Props) {

  const [blood_type, setBloodType] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setBloodType(event.target.value as string);
  };

  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (editMode) {
      axios.put(`http://localhost:8000/patients/${editPatient.id}`, {
        "id": editPatient.id,
        "name": data.user,
        "cpf": data.cpf,
        "birth_date": data.birth_date,
        "height": data.height,
        "weight": data.weight,
        "blood_group": data.blood_group,
        "sex": data.sex,
        "observation": data.observation,
        "tel": data.tel,
        "email": data.email
      }).then(res => {
        toast.success("Alterado com sucesso!!")
      })
        .catch(error => {
          toast.error("Erro ao Alterar " + error.message)

        })
    } else {
      axios.post(`http://localhost:8000/patients`, {
        "name": data.user,
        "cpf": data.cpf,
        "birth_date": data.birth_date,
        "height": data.height,
        "weight": data.weight,
        "blood_group": data.blood_group,
        "sex": data.sex,
        "observation": data.observation,
        "tel": data.tel,
        "email": data.email
      }).then(res => {
        toast.success("Cadastrado com sucesso!!")
      })
        .catch(error => {
          toast.error(" Contante a equipe de suporte \n" + error.message)
        })
    }
  }

  function setCode(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>

      <Helmet>
        <title>Cadastrar de Paciente</title>
      </Helmet>
      <Container maxWidth={false} sx={{
        marginBottom: 5
      }}>
        <Paper sx={{ width: 'auto', marginTop: 5, boxShadow: 5 }}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant='h4' align='center' sx={{ marginTop: '20px' }}>
                {
                  !editMode ? "Cadastro de Paciente" : "Editar Paciente"
                }
              </Typography>
              <Divider sx={{
                marginTop: 2,
              }} />
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Grid container spacing={3} >
                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" sx={{ marginTop: 5, }}>
                        <TextField fullWidth
                          defaultValue={editPatient?.name}
                          {...register("user", { required: true })}
                          placeholder='Nome'
                          label='Nome'
                          id='name' />
                        <label className='error-label'>{errors.user?.type === 'required' && 'Escreva o nome do paciente'}</label>
                      </FormControl>
                      <FormControl fullWidth variant="outlined" sx={{ marginTop: 5, }}>
                        <TextField fullWidth
                          defaultValue={editPatient?.cpf}
                          {...register("cpf", { required: true })}
                          onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");
                            if (e.target.value.length > 14) {
                              e.target.value = e.target.value.substring(0, 14);
                            }
                          }}
                          label='CPF'
                          placeholder='000.000.000-00'
                          type="text"
                          variant="outlined" />
                        <label className='error-label'>{errors.cpf?.type === 'required' && 'Escreva o CPF do paciente'}</label>
                      </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" sx={{ marginTop: 5, }}>
                        <TextField fullWidth
                          {...register("birth_date", { required: true })}
                          defaultValue={editPatient?.birth_date}
                          type='date' />
                        <label className='error-label'>{errors.birth_date?.type === 'required' && 'Escreva a data de nascimento do paciente'}</label>
                      </FormControl>
                      <FormControl fullWidth variant="outlined" sx={{ marginTop: 5, }}>
                        <div className="sex">
                          <label htmlFor="male">Masculino
                            {
                              editPatient.sex === "M"
                                ? <input checked {...register('sex', { required: true })}
                                  type="radio" name="sex" defaultValue="M" className="form-check-input" id='male' />
                                : <input {...register('sex', { required: true })}
                                  type="radio" name="sex" defaultValue="M" className="form-check-input" id='male' />
                            }

                          </label>
                          <label htmlFor="female">Feminino
                            {
                              editPatient.sex === "F"
                                ? <input checked {...register('sex', { required: true })}
                                  type="radio" name="sex" defaultValue="F" className="form-check-input" id='female' />
                                : <input {...register('sex', { required: true })}
                                  type="radio" name="sex" defaultValue="F" className="form-check-input" id='female' />
                            }
                          </label>
                        </div>
                        <label className='error-label'>{errors.sex?.type === 'required' && 'Selecione o sexo do paciente'}</label>
                      </FormControl>
                    </Grid>


                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" >
                        <TextField fullWidth
                          {...register("weight", { required: true })}
                          defaultValue={editPatient?.weight}
                          type='text'
                          onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                          }}
                          label='Peso' />
                        <label className='error-label'>{errors.weight?.type === 'required' && 'Escreva o peso do paciente'}</label>
                      </FormControl>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" >
                        <TextField fullWidth
                          {...register("height", { required: true })}
                          defaultValue={editPatient?.height}
                          type='text'
                          onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                          }}
                          label='Altura' />
                        <label className='error-label'>{errors.height?.type === 'required' && 'Escreva a altura do paciente'}</label>
                      </FormControl>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" >
                        <TextField fullWidth
                          {...register("email", { required: true })}
                          defaultValue={editPatient?.email}
                          type='email'
                          label='Email' />
                        <label className='error-label'>{errors.weight?.type === 'required' && 'Escreva o email do paciente'}</label>
                      </FormControl>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <FormControl fullWidth variant="outlined" >
                        <TextField fullWidth
                          {...register("tel", { required: true })}
                          defaultValue={editPatient?.weight}
                          type='tel'
                          onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            e.target.value = e.target.value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
                            if (e.target.value.length > 15) {
                              e.target.value = e.target.value.substring(0, 15);
                            }
                          }}
                          placeholder='(00) 00000-0000'
                          label='Telefone' />
                        <label className='error-label'>{errors.tel?.type === 'required' && 'Escreva o telefone do paciente'}</label>
                      </FormControl>
                    </Grid>


                    <Grid item md={100} xs={12}>
                      <FormControl fullWidth variant="outlined" >
                        <label id="blood_type">Tipo Sanguineo</label>
                        <select {...register("blood_group", { required: true })} defaultValue={editPatient?.blood_group} style={{
                          padding: 16,
                          borderRadius: 3,
                          fontSize: 15
                        }}>
                          <option></option>
                          <option defaultValue="A+">A+</option>
                          <option defaultValue="A-">A-</option>
                          <option defaultValue="B+">B+</option>
                          <option defaultValue="B-">B-</option>
                          <option defaultValue="AB+">AB+</option>
                          <option defaultValue="AB-">AB-</option>
                          <option defaultValue="O+">O+</option>
                          <option defaultValue="O-">O-</option>
                        </select>
                        <label className='error-label'>{errors.blood_group?.type === 'required' && 'Selecione o Tipo Sanguineo do paciente'}</label>
                      </FormControl>
                    </Grid>
                    <Grid item md={100} xs={12}>
                      <InputLabel id="">Observação</InputLabel>
                      <TextareaAutosize
                        style={{ width: '100%', height: 100, padding: 5, resize: 'vertical' }}
                        {...register("observation", { required: true })}
                        defaultValue={editPatient?.observation} />

                      <label className='error-label'>{errors.observation?.type === 'required' && 'Escreva a obsevação do paciente' || ''}</label>
                    </Grid>
                  </Grid>

                </CardContent>
                <Divider />
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <Button type='submit' sx={{
                    p: 2,
                    width: '100%',
                    border: 1,
                    color: '#000',
                    borderColor: 'var(--green)'
                  }}>
                    CADASTRAR
                  </Button>
                  {
                    editMode && (
                      <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button type='submit' sx={{
                          marginTop: 2,
                          p: 2,
                          width: '100%',
                          border: 1,
                          color: '#000',
                          borderColor: '#e9e9e9'
                        }}>
                          CANCELAR
                        </Button>
                      </Link>
                    )
                  }
                </Box>
              </Card>
            </form>
          </Box>
        </Paper>
      </Container>

    </>
  );
};