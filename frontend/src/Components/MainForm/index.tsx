import * as React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import '../../assets/styles/wave.css'
import axios from "axios";
import { FormValues, Patient } from "../interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    editMode : boolean
    editPatient : Patient
    setEditPatient: Function
    setEditMode: Function
}

export default function MainForm({editMode,setEditMode, editPatient, setEditPatient}:Props){


const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();

    function clearField(){
        setEditPatient({
            id:0,
            name:"",
            birth_date:"",
            blood_group:"",
            cpf:"",
            sex:"",
            weight:0,
            height: 0
        })

        setEditMode(false)
    }

    const onSubmit: SubmitHandler<FormValues> = (data) => {     
            console.log("Data ",data);
            
            console.log("EditMode: "+editMode);
            console.log("PatientId: "+editPatient.id);
            
        if(editMode){
            axios.put(`http://localhost:8000/patients/${editPatient.id}`,{
                "id":editPatient.id,
                "name": data.user,
                "cpf": data.cpf,
                "birth_date": data.birth_date,
                "height": data.height,
                "weight": data.weight,
                "blood_group": data.blood_type,
                "sex": data.gender
              }).then(res => {
                toast.success("Alterado com sucesso!!")
            })
            .catch(error => {
                toast.error("Erro ao Alterar CPF ja existente")
                
            })
        }else{
            axios.post(`http://localhost:8000/patients`,{
                "name": data.user,
                "cpf": data.cpf,
                "birth_date": data.birth_date,
                "height": data.height,
                "weight": data.weight,
                "blood_group": data.blood_type,
                "sex": data.gender
              }).then(res => {
                toast.success("Cadastrado com sucesso!!")
            })
            .catch(error => {
                console.log(error);
            })
        }
    };

        return (
        <>
            <link rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
            </link>

            
                <fieldset>
                    <legend>Cadastro de Paciente</legend>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="name">Nome</label>
                                    <input defaultValue={editPatient?.name} type="text" id='name' {...register("user",{required: true})} />
                                    <p className="error-label">{errors.user?.type === 'required' && 'Escreva seu nome'}</p>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="date">Data de Nascimento</label>
                                    <input defaultValue={editPatient?.birth_date} type="date" id='date' {...register("birth_date",{required: true})} />
                                    <p className="error-label">{errors.birth_date?.type === 'required' && 'Escolha uma data'}</p>
                                </td>
                                <td>
                                    <label htmlFor="">Gender</label>
                                    <div className="gender-options">
                                        <label htmlFor="male">Masculino
                                            {
                                                editPatient.sex === "M" ? <input checked {...register('gender', { required: true })} type="radio"
                                                name="gender" defaultValue="M" className="form-check-input"
                                                id="male" />  : <input {...register('gender', { required: true })} type="radio"
                                                name="gender" defaultValue="M" className="form-check-input"
                                                id="male" /> 
                                            }
                                            
                                        </label>
                                        <br />
                                        <label htmlFor="female">Feminino
                                            {
                                                editPatient.sex === "F" ? <input checked {...register('gender', { required: true })} type="radio"
                                                name="gender" defaultValue="F" className="form-check-input"
                                                id="female" />  : <input {...register('gender', { required: true })} type="radio"
                                                name="gender" defaultValue="F" className="form-check-input"
                                                id="female" /> 
                                            }
                                            
                                        </label>
                                        <div className="text-danger mt-3">
                                            <p className="error-label">{errors.gender?.type === 'required' && 'Selecione seu sexo'}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cpf">CPF </label>
                                    <input defaultValue={editPatient?.cpf} type="text" placeholder='123.456.789-10' id='cpf' {...register("cpf",{required:true})} />
                                    <p className="error-label">{errors.cpf?.type === 'required' && 'Escreva seu CPF'}</p>
                                </td>
                                <td>
                                    <label htmlFor="">Blood type</label>
                                    <br />
                                    <select {...register("blood_type",{required:true})} defaultValue={editPatient?.blood_group}>
                                        <option defaultValue="">Tipo Sanguineo</option>
                                        <option defaultValue="A+">A+</option>
                                        <option defaultValue="A-">A-</option>
                                        <option defaultValue="B+">B+</option>
                                        <option defaultValue="B-">B-</option>
                                        <option defaultValue="AB+">AB+</option>
                                        <option defaultValue="AB-">AB-</option>
                                        <option defaultValue="O+">O+</option>
                                        <option defaultValue="O-">O-</option>
                                    </select>
                                    <p className="error-label">{errors.blood_type?.type === 'required' && 'Escolha o tipo sanguineo'}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="weight">Peso</label>
                                    <input defaultValue={editPatient?.weight === 0 ? undefined : editPatient?.weight} type="text" id="weight" placeholder="Peso" {...register("weight",{required:true})} />
                                    <p className="error-label">{errors.weight?.type === 'required' && 'Escreva o Peso'}</p>
                                    
                                </td>
                                <td>
                                    <label htmlFor="height">Altura</label>
                                    <input defaultValue={editPatient?.height === 0 ? undefined : editPatient?.height} type="text" id="height" placeholder="Altura" {...register("height",{required:true})} />
                                        <p className="error-label">{errors.height?.type === 'required' && 'Escreva a Altura'}</p>
                                </td>
                            </tr>
                        </table>
                        <input type="submit" defaultValue="submit"/>
                        <ToastContainer />
                            
                            {
                                editMode && (
                                    <Link to={'/listing'}>
                                        <input type="button" value="Cancel" onClick={clearField}/>
                                    </Link>
                                )
                            }
                    </form>


                </fieldset>
            
            

        </>
        )
        }