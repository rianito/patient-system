import React, { useState } from 'react';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import '../../assets/styles/wave.css'

function LoginForm(){

    type FormValues = {
        user: string;
        password: string;
      };

      const [user, setUser] = useState()
      const [pass, setPass] = useState("");

      const { register, handleSubmit } = useForm<FormValues>();
      const onSubmit: SubmitHandler<FormValues> = data => {
        if(data.user === "" || data.password === ""){
            toast.error("Campo Usuario ou Senha invalidos",{
                theme: 'dark',
                draggable: true
            })
        }else{
            toast.success("Logado")
            document.querySelector("form")?.reset()
        }
      };

    return(
        
        <>

            <div className="container">
                <fieldset>
                    <legend>Login</legend>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <table>

                        <tr>
                            <td>
                                <label htmlFor="user_login">
                                <i className="fa fa-user" aria-hidden="true"  ></i>
                                </label>
                                <input type="text" id="user_login" {...register("user")} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pass_login">
                                <i className="fa fa-key" aria-hidden="true"></i>
                                </label>
                                <input type="password" id="pass_login"placeholder="******" {...register("password")}/>
                                <i id="see_pass" className="fa fa-eye"></i>
                            </td>
                        </tr>

                    </table>

                    <input type="submit" value="login" id="login_btn" />
                        <ToastContainer />
                    </form>
                </fieldset>
            </div>


            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(52, 70, 235,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(52, 70, 235,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(52, 70, 235,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#3446eb" />
            </g>
        </svg>
            
        </>
    )
}

export default LoginForm