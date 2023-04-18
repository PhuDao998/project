
import '../../styles/login.css';
import React, { useState } from 'react';
import {handleChangeInput, handleChangeEmail, handleChangePassword, handleChangeInputRequired, handleValidate} from '../../helper/formControl'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../contexts/Authenticate";
import LoadingIcon from '../../helper/Loading_icon';


export default function CreateAcount() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formInfo, setFormInfo] = useState({
        first_name: {
            value: '',
            warning: '',
            required: true
        },
        last_name: {
            value: '',
            required: false
        },
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
   
    const handleSubmitFormLogin = async (e) => {
        e.preventDefault();
        if (!formInfo.password.help_text && !formInfo.password.warning 
            && !formInfo.email.help_text && !formInfo.email.warning 
            && !formInfo.first_name.warning 
            && handleValidate(formInfo,setFormInfo)) {

            setLoadingButton(true);
            await login(formInfo.email.value, formInfo.password.value);
            navigate("/");
            setLoadingButton(false);
        }
    };

    return (
        <div className="login_container w-screen h-screen flex items-center justify-center">
            <form className="login_form w-[450px] text-[14px] rounded-lg bg-white px-8 pt-6 pb-8 flex flex-col justify-between">
                <div className="text-center text-2xl font-bold">
                    Create company'account
                </div>
                <div className="form_field_container mt-4">
                    <div className="form_field__item mt-3">
                        <label htmlFor="email">First name</label>
                        <input value={formInfo.first_name.value} onChange={(e) => handleChangeInputRequired(e, formInfo, setFormInfo, 'first_name')} type="text" name='email' id='email' className="form_field__input" placeholder='Enter your name' />
                        <span className="warning_input">
                            {formInfo.first_name.warning}
                        </span>
                    </div>
                    <div className="form_field__item no_required mt-3">
                        <label htmlFor="email">Last name</label>
                        <input value={formInfo.last_name.value} onChange={(e) => handleChangeInput(e, formInfo, setFormInfo, 'last_name')} type="text" name='email' id='email' className="form_field__input" placeholder='Enter your password' />
                    </div>
                    <div className="form_field__item mt-3">
                        <label htmlFor="email">Your email</label>
                        <input value={formInfo.email.value} onChange={(e) => handleChangeEmail(e, formInfo, setFormInfo)} type="text" name='email' id='email' className="form_field__input" placeholder='name@gmail.com' />
                        <span className="warning_input">
                            {formInfo.email.warning}
                        </span>
                        <span className="help_text_input">
                            {formInfo.email.help_text}
                        </span>
                    </div>
                    <div className="form_field__item mt-3">
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
                <div className="action_container mt-6">
                    <button onClick={handleSubmitFormLogin} className="login_btn h-[42px] w-full border-none bg-blue-500 rounded-lg text-white font-[600] cursor-pointer hover:bg-blue-400 transition-all">
                        {!loadingButton ? 'Create account' : <LoadingIcon />}
                    </button>
                    <Link to={'/login'} className='text-center block mt-3 text-blue-500 font-[600] hover:underline'>
                        Already have an account
                    </Link>
                </div>
            </form>
        </div>
    );
};