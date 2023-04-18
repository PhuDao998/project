
import '../../styles/login.css';
import React, { useState } from 'react';
import {handleChangeEmail, handleChangePassword, handleValidate} from '../../helper/formControl'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useAuth } from "../../contexts/Authenticate";
import LoadingIcon from '../../helper/Loading_icon';


export default function Login() {
    const navigate = useNavigate();
    const { login, currentUser } = useAuth();
    const [formInfo, setFormInfo] = useState({
        email: {
            value: '',
            warning: '',
            help_text: '',
            required: true
        },
        password: {
            value: '',
            warning: '',
            help_text: '',
            required: true
        }
    });
    const [loadingButton, setLoadingButton] = useState(false);
   
    const handleSubmitFormCreate = async (e) => {
        e.preventDefault();
        if (!formInfo.password.help_text && !formInfo.password.warning
            && !formInfo.email.help_text && !formInfo.email.warning 
            && handleValidate(formInfo,setFormInfo)) {
            setLoadingButton(true);
            await login(formInfo.email.value, formInfo.password.value);
            navigate("/");
            setLoadingButton(false);
        }
    };

    return (
        <div className="login_container w-screen h-screen flex items-center justify-center">
            {currentUser ? <Navigate to="/" replace={true} /> : null}
            <form className="login_form w-[450px] text-[14px] rounded-lg bg-white p-8 flex flex-col justify-between">
                <div className="text-center text-2xl font-bold">
                    Sign in to your account
                </div>
                <div className="form_field_container mt-6">
                    <div className="form_field__item mt-2">
                        <label htmlFor="email">Your email</label>
                        <input value={formInfo.email.value} onChange={(e) => handleChangeEmail(e, formInfo, setFormInfo)} type="text" name='email' id='email' className="form_field__input" placeholder='name@gmail.com' />
                        <span className="warning_input">
                            {formInfo.email.warning}
                        </span>
                        <span className="help_text_input">
                            {formInfo.email.help_text}
                        </span>
                    </div>
                    <div className="form_field__item mt-4">
                        <label htmlFor="password">Your password</label>
                        <input type="password" value={formInfo.password.value} onChange={(e) => handleChangePassword(e, formInfo, setFormInfo)} name='password' id='password' className="form_field__input" placeholder='••••••••' />
                        <span className="warning_input">
                            {formInfo.password.warning}
                        </span>
                        <span className="help_text_input">
                            {formInfo.password.help_text}
                        </span>
                    </div>
                </div>
                <div className="form_more__action flex items-center justify-between mt-6">
                    <div className="form_field__checkbox flex items-center gap-2 font-[600] text-gray-600">
                        <input type="checkbox" id='remember_account' className='h-4 w-4' />
                        <label htmlFor="remember_account">Remember me</label>
                    </div>
                    <Link to="/login" className="forgot_password text-blue-500 font-[600] hover:underline">
                        Forgot password ?
                    </Link>
                </div>
                <div className="action_container mt-6">
                    <button onClick={handleSubmitFormCreate} className="login_btn h-[42px] w-full border-none bg-blue-500 rounded-lg text-white font-[600] cursor-pointer hover:bg-blue-400 transition-all">
                        {!loadingButton ? 'Log in to your account' : <LoadingIcon />}
                    </button>
                    <Link to={'/signup'} className='text-center block mt-5 text-blue-500 font-[600] hover:underline'>
                        Don't have an account?
                    </Link>
                </div>
            </form>
        </div>
    );
};

