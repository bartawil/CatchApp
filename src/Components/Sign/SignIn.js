import {useState} from 'react';
import dataBase from '../DataBase/dataBase';

function SignIn({pageFlag, isLogin}) {

    // get & set user name and password from input
    const [formValues, setFormValues] = useState({user: "", password: "" });
    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    };
    
    // when user try to submit checks if all correct
    function handleSubmit(e) {
        e.preventDefault();
        setformErrors(validate(formValues));
    };
    
    // set errors
    const [formErrors, setformErrors] = useState({});
    function validate (values) {
        const errors = {};
        if (!values.user) {
            errors.user = "Username is required...";
        }
        if (!values.password) {
            errors.password = "Password is required...";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 20 characters";
        }
        if (values.user !== '' && values.password !== '') {
            if (dataBase.some(item => formValues.user === item.userName)) {
                const index = dataBase.findIndex((user) => user.userName === formValues.user);
                if (values.password !== dataBase.at(index).password) {
                    errors.login = "Wrong password, try again..";
                } else {
                    pageFlag(true); // goes to chag page
                    isLogin(index);
                }
            } else {
                errors.login = "Username doesn't exist please sign-up first";
            }
        }

        return errors;
    };

    return(
        <div className="sign-in-htm">
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <p id='errors'>{formErrors.user}</p>
                    <input 
                    id="user" 
                    type="text" 
                    className="input" 
                    placeholder='Username'
                    name='user'
                    value={formValues.user}
                    onChange={handleChange}/>
                </div>
                <div className="group">
                    <p id='errors'>{formErrors.password}</p>
                    <input 
                    id="pass" 
                    type="password" 
                    className="input" 
                    data-type="password" 
                    placeholder='Password'
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}/>   
                </div>
                <div className="group">
                    <p id='error-login'>{formErrors.login}</p>
                    <button 
                        type="submit"
                        className="button"
                        defaultValue="Sign-In"
                    >
                        Next                        
                    </button>
                </div>
                
                <div className="hr" />
                {/* <pre>{JSON.stringify(dataBase.findIndex((user) => user.name === formValues.user), undefined, 2)}</pre> */}
                {/* <pre>{JSON.stringify(Object.keys(formErrors).length, undefined, 2)}</pre> 
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            </form>
        </div>
    );
}

export default SignIn;