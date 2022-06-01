import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import "./css/LoginForm.css";
import "./css/App.css";

const renderError = ({error, touched}) =>{
    console.log(`error IN RENDER ERROR`, error);
    console.log(`touched In RENDER ERROR`, touched);
    if(touched && error){
        return(
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        )
    }
}

const renderInputs = ({input,label,meta}) =>  {
    console.log("meta",meta);
    return(
        <div className="field">
            <label >{label}</label>
            <input  {...input}  autoComplete="off" />
            <div>
                {renderError(meta)} 
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    console.log(`props`, props);
   


    return (
        <div className="ui container main-container">
        <form className="ui form error"   >
            <h2 className="ui header">NieTikTok</h2>
            <Field name="name" label="Enter name" component={renderInputs} 
            />
            <Field name="surname" label="Enter surname" component={renderInputs} 
            />
            <Field name="email" label="Enter e-mail" component={renderInputs} 
            />
             
            <Link to="/index"   className={!props.valid ? "disabled-link" : ""}>
            <button className="fluid ui blue button"
            disabled={props.invalid||props.pristine || props.submitting} >
            Enter
            </button>
            </Link>
        </form>
        </div>
    )
}
const validate = (formValues) => {
    const errors = {};
    console.log(`VALIDATE formValues`, formValues);
    console.log(`errors.length`, errors.length);
    if(!formValues.name){
        errors.name = "Enter a name"
    }
    if(formValues.name && formValues.name.length < 2  ){
        errors.name = "Enter a longer version of name";
        }
            
    if(!formValues.surname){
        errors.surname = "Enter a surname"
    }
    if(formValues.surname && formValues.surname.length < 2  ){
        errors.surname = "Enter a longer version of surname";
        }

    if(!formValues.email){
        errors.email = "Enter an e-mail"
    }
    if(formValues.email){
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(!formValues.email.match(regexEmail) ){
           errors.email =   "Enter a proper e-mail adress"
       }
    }
    
    return errors;
}


export default reduxForm({
    form: "loginForm",
    validate: validate
}) (LoginForm);
