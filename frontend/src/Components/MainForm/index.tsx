import * as React from "react";
import ReactSelect from 'react-select'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import '../../assets/styles/wave.css'

export default function MainForm(){

const options = [
{ value: 'A+', label: 'A+' },
{ value: 'A-', label: 'A-' },
{ value: 'B+', label: 'B+' },
{ value: 'AB+',label: 'AB+'},
{ value: 'AB-',label: 'AB-'},
{ value: 'O+',label: 'O+'},
{ value: 'O+',label: 'O+'}
]

interface FormValues {
user:string;
lastname:string;
cpf:string;
cep:string
email:string;
tel:string;
date: string;
gender:string;
bloodtype:string;
}

const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();

    React.useEffect(() => {
    setError("user", {
    type: "manual",
    message: "Dont Forget Your Username Should Be Cool!"
    });
    }, [setError])

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);

        if(data.user === "" || data.lastname === "" || data.cpf === "" || data.tel === "" || data.date === ''){
        toast.error("Campos invalidos")
        }else{
        toast.success("Cadastrado com sucesso!!")

        document.querySelector("form")?.reset()
        }
        };

        return (
        <>
            <link rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
            </link>

            <div className="container">
                <fieldset>
                    <legend>Cadastro de Paciente</legend>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" id='name' {...register("user",{required: true})} />
                                    <p className="error-label">{errors.user?.type === 'required' && 'Escreva seu nome'}</p>

                                </td>
                                <td>
                                    <label htmlFor="lastname">Sobrenome</label>
                                    <input type="text" id='lastname' {...register("lastname",{required: true})} />
                                    <p className="error-label">{errors.lastname?.type === 'required' && 'Escreva seu sobrenome'}</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="date">Data de Nascimento</label>
                                    <input type="date" id='date' {...register("date",{required: true})} />
                                    <p className="error-label">{errors.date?.type === 'required' && 'Escolha uma data'}</p>
                                </td>
                                <td>
                                    <label htmlFor="">Gender</label>
                                    <div className="gender-options">
                                        <label htmlFor="male">Masculino
                                            <input {...register('gender', { required: true })} type="radio"
                                                name="gender" value="Masculino" className="form-check-input"
                                                id="male" />
                                        </label>
                                        <br />
                                        <label htmlFor="female">Feminino
                                            <input {...register('gender', { required: true })} type="radio"
                                                name="gender" value="Feiminino" className="form-check-input"
                                                id="female" />
                                        </label>
                                        <div className="text-danger mt-3">
                                            <p className="error-label">{errors.gender?.type === 'required' && 'Selecione seu sexo'}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <label htmlFor="">Blood type</label>
                                    <ReactSelect options={options} />
                                    <p className="error-label">{errors.bloodtype?.type === 'required' && 'Escolha seu tipo sanguineo'}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cpf">CPF </label>
                                    <input type="text" placeholder='123.456.789-10' id='cpf' {...register("cpf",{required:true})} />
                                    <p className="error-label">{errors.cpf?.type === 'required' && 'Escreva seu CPF'}</p>
                                </td>
                                <td>
                                    <label htmlFor="tel">Telefone</label>
                                    <input type="text" placeholder='(99) 99999-9999' id='tel' {...register("tel",{required:true})} />
                                    <p className="error-label">{errors.tel?.type === 'required' && 'Escreva seu telefone'}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" id="cep" {...register("cep",{required:true})} />
                                    <p className="error-label">{errors.cep?.type === 'required' && 'Escreva seu CEP'}</p>
                                    
                                </td>
                                <td>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="seumelhoremail@gmail.com"
                                        {...register("email",{required:true})} />
                                        <p className="error-label">{errors.email?.type === 'required' && 'Escreva seu EMAIL'}</p>
                                </td>
                            </tr>
                        </table>
                        <input type="submit" value="submit" />
                        <ToastContainer />
                    </form>


                </fieldset>
            </div>


            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(50, 168, 82,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(50, 168, 82,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(50, 168, 82,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#32a852" />
                </g>
            </svg>

        </>
        )
        }