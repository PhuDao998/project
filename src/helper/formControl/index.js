export const handleChangeEmail = (e, formInfo, setFormInfo) => {
    const email = e.target.value;
    if (email && email.length > 0) {
        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setFormInfo({
                ...formInfo,
                email: {
                    ...formInfo.email,
                    value: email,
                    warning: '',
                    help_text: ''
                }
            });
        } else {
            setFormInfo({
                ...formInfo,
                email: {
                    ...formInfo.email,
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
                ...formInfo.email,
                value: email,
                help_text: '',
                warning: 'This field cannot be bank'
            }
        });
    }
};

export const handleChangePassword = (e,formInfo, setFormInfo) => {
    const password = e.target.value;
    if (password && password.length > 0) {
        if (password.length >= 6) {
            setFormInfo({
                ...formInfo,
                password: {
                    ...formInfo.password,
                    value: password,
                    warning: '',
                    help_text: ''
                }
            });
        } else {
            setFormInfo({
                ...formInfo,
                password: {
                    ...formInfo.password,
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
                ...formInfo.password,
                value: password,
                warning: 'This field cannot be bank',
                help_text: ''
            }
        });
    }
};

export const handleChangeInputRequired = (e, formInfo, setFormInfo, inputName) => {
    const inputValue = e.target.value;
    if (inputValue && inputValue.length > 0) {
        setFormInfo({
            ...formInfo,
            [inputName]: {
                ...formInfo[inputName],
                value: inputValue,
                warning: '',
            }
        });
    } else {
        setFormInfo({
            ...formInfo,
            [inputName]: {
                ...formInfo[inputName],
                value: inputValue,
                warning: 'This field cannot be bank',
            }
        });
    }
}
export const handleChangeInput = (e, formInfo, setFormInfo, inputName) => {
    setFormInfo({
        ...formInfo,
        [inputName]: {
            ...formInfo[inputName],
            value: e.target.value
        }
    });
}

export const handleValidate = (formInfo,setFormInfo) => {
    const formData = {...formInfo}
    let checkValidation = true
    Object.keys(formData).forEach( field => {
        if(formData[field].value === ''&& formData[field].required) {
            formData[field].warning = 'This field cannot be bank'
            checkValidation = false
        }
    })
    setFormInfo(formData)
    return checkValidation
}