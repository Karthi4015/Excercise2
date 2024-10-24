import React, { useState } from 'react';


import Button from "./Button";
import Inputtext from './InputTextElement';

const LoginForm = () => {
  const [userIn, setUserIn] = useState({
    username: "",
    password: "",
 });
 const handleUser = (_, e) => {
  e.preventDefault();
  localStorage.setItem("userData", JSON.stringify(userIn));
 

  setUserIn({
    username: "",
    password: "",
  });
};

  return (
    <form className="d-flex w-100 flex-column justify-content-evenly align-items-center h-100">
      <Inputtext
  htmlFor={"username"}
  labelValue={"Username :"}
  inputType={"text"}
  inputName={"username"}
  inputId={"username"}
  handler={setUserIn}
  data={userIn}
  field={"username"}
/>
      <Inputtext
        htmlFor={"password"}
        labelValue={"Password :"}
        inputType={"password"}
        inputName={"password"}
        inputId={"password"}
        handler={setUserIn}
        data={userIn}
        field={"password"}
      />

      <article>
        <Button title="Sign In"

         bsStyles={"btn btn-primary"} 
      
        handler={ handleUser}

          />
        
      </article>
    </form>
  );
};

export default LoginForm;