import {useState} from 'react';
import './SignUp.css';
import dataBase from '../DataBase/dataBase';


function SignUp({pageFlag}) {
    const [formValues, setFormValues] = useState({ user: "", display: "", password: "", confirm: "" });
    function handleChange(e) {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    };

    function handleSignUp(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };

    const [file, setFile] = useState("https://t4.ftcdn.net/jpg/02/70/22/85/360_F_270228529_iDayZ2Dl4ZeDClKl7ZnLgzN5HRIvlGlK.jpg");
    function addPhoto(e) {
        if (e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)){
            setFile(URL.createObjectURL(e.target.files[0]));
        }        
    }

    const [formErrors, setFormErrors] = useState({});
    function validate(values) {
        const errors = {};
        if (!values.user) {
            errors.user = "Username is required...";
        }
        if (!values.display) {
            errors.display = "Nickname is required...";
        }
        if (!values.password) {
            errors.password = "Password is required...";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 20 characters";
        } else if (values.password.search(/\d/) === -1 || values.password.search(/[a-zA-Z]/) === -1) {
            errors.password = "Password must include at least one letter and one number";
        } else if (!values.confirm) {
            errors.confirm = "Please confirm your password...";
        } else if (values.confirm !== values.password) {
            errors.confirm = "Passwords must and should match!";
        } else if (values.user !== '' && values.display !== '') {
            if (dataBase.some(item => formValues.user === item.userName)) {
                errors.rgister = "This Username already have an account!";
            } else {
                dataBase.unshift({
                userName: values.user,
                displayName: values.display, 
                password: values.password,
                img: file, 
                contactsList: [

                ]
                });
                pageFlag(true); // goes to chat page
            }
        }
        return errors;
    };

    return(
        <div className="sign-up-htm">
            <form onSubmit={handleSignUp}>
                <div className="profile-pic">
                    <label className="-label" htmlFor="file">
                        <span className="glyphicon glyphicon-camera"></span>
                        <span>Upload Image</span>
                    </label>
                    <input id="file" type="file" onChange={addPhoto}/>
                    <img src={file} id="output" width="200" alt="" />
                </div>
                <div className="group">
                    <p id='errors'>{formErrors.user}</p>
                    <input 
                    id="user" 
                    type="text" 
                    className="input" 
                    placeholder="Username" 
                    name='user'
                    value={formValues.user}
                    onChange={handleChange}/>
                </div>
                <div className="group">
                    <p id='errors'>{formErrors.display}</p>
                    <input 
                    id="display" 
                    type="text" 
                    className="input" 
                    placeholder="Nickname" 
                    name='display'
                    value={formValues.display}
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
                    <p id='errors'>{formErrors.confirm}</p>
                    <input 
                    id="confirm" 
                    type="password" 
                    className="input" 
                    data-type="password" 
                    placeholder='Repeat Password'
                    name='confirm'
                    value={formValues.confirm}
                    onChange={handleChange}
                    />
                </div>
                <div className="group">
                    <p id='error-login'>{formErrors.rgister}</p>
                    <button 
                        type="submit"
                        className="button"
                        defaultValue="Sign-In"
                    >
                        Next                        
                    </button>
                </div>
                <div className="hr" />
                {/* <pre>{JSON.stringify(formValues, undefined, 4)}</pre> */}
            </form>
        </div>

    );
}

export default SignUp;