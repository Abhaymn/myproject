import React,{useState} from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";

import classes from'./AddUser.module.css';


const AddUser=(props)=>{
    const [enteredUsername,setEnteredUsername]=useState();
    const [enteredAge,setEnteredAge]=useState();
    const [enteredCollegename,setEnteredCollegename]=useState();
    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 || enteredCollegename.trim().length===0){
            setError(
                {
                    title:'Invalid input',
                    message:'please enter a valid input'
                }
            );
            return;
        }
        if(+enteredAge<1){
            setError(
                {
                    title:'Invalid Age',
                    message:'please enter a valid age'
                }
            );
            return;
        }
        props.onAddUser(enteredUsername,enteredAge,enteredCollegename);
        setEnteredAge('');
        setEnteredUsername('');
        setEnteredCollegename('');
    }

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const collegenameChangeHandler=(event)=>{
        setEnteredCollegename(event.target.value);
    }

    const errorHandler=()=>{
        setError(null);
    }

    return (
        <Wrapper>
    {error && 
    <ErrorModal 
    title={error.title} 
    message={error.message} 
    onConfirm={errorHandler}
    />
    }

     <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label >Username</label>
            <input 
            id='username' 
            type='text' 
            value={enteredUsername} 
            onChange={usernameChangeHandler}/>
            
            <label>Age (Years)</label>
            <input 
            id ='age' 
            type='number' 
            value={enteredAge} 
            onChange={ageChangeHandler}/>

            <label>College Name</label>
            <input 
            id ='collegename' 
            type='text' 
            value={enteredCollegename} 
            onChange={collegenameChangeHandler}/>

            <Button type='submit'>Add User</Button>
        </form>
        
     </Card>
     </Wrapper>
    );

};

export default AddUser;