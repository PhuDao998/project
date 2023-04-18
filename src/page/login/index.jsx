
import '../../styles/login.css';
import React, { useState } from 'react';

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
        },
        password: {
            value: '',
            warning: '',
            help_text: '',
        }
    });
    const [loadingButton, setLoadingButton] = useState(false);
    const handleChangeEmail = (e) => {
        const email = e.target.value;
        if (email && email.length > 0) {
            // eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setFormInfo({
                    ...formInfo,
                    email: {
                        value: email,
                        warning: '',
                        help_text: ''
                    }
                });
            } else {
                setFormInfo({
                    ...formInfo,
                    email: {
                        value: email,
                        warning: '',
                        help_text: 'Email format is not correct'
                    }
                });
            }
        } else {
            setFormInfo({
                ...formInfo,
                email: {
                    value: email,
                    help_text: '',
                    warning: 'This field cannot be bank'
                }
            });
        }
    };

    const handleChangePassword = (e) => {
        const password = e.target.value;
        if (password && password.length > 0) {
            if (password.length >= 6) {
                setFormInfo({
                    ...formInfo,
                    password: {
                        value: password,
                        warning: '',
                        help_text: ''
                    }
                });
            } else {
                setFormInfo({
                    ...formInfo,
                    password: {
                        value: password,
                        warning: '',
                        help_text: 'Password field needs at least 6 characters'
                    }
                });
            }
        } else {
            setFormInfo({
                ...formInfo,
                password: {
                    value: password,
                    warning: 'This field cannot be bank',
                    help_text: ''
                }
            });
        }
    };

    const handleSubmitFormLogin = async (e) => {
        e.preventDefault();
        if (!formInfo.password.help_text && !formInfo.password.warning && !formInfo.email.help_text && !formInfo.email.warning) {
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
                        <input value={formInfo.email.value} onChange={handleChangeEmail} type="text" name='email' id='email' className="form_field__input" placeholder='name@gmail.com' />
                        <span className="warning_input">
                            {formInfo.email.warning}
                        </span>
                        <span className="help_text_input">
                            {formInfo.email.help_text}
                        </span>
                    </div>
                    <div className="form_field__item mt-4">
                        <label htmlFor="password">Your password</label>
                        <input type="password" value={formInfo.password.value} onChange={handleChangePassword} name='password' id='password' className="form_field__input" placeholder='••••••••' />
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
                    <button onClick={handleSubmitFormLogin} className="login_btn h-[42px] w-full border-none bg-blue-500 rounded-lg text-white font-[600] cursor-pointer hover:bg-blue-400 transition-all">
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

