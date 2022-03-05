import { FormControl, FormGroup, FormLabel, Input,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { AddPostUser } from "../../service/api";
import { useNavigate } from "react-router-dom";
const useStyle= makeStyles({

contenar:{
   width:"600px",
   marginLeft:"300px",
   marginTop:"40px",
   
   
   '& > *':{
     marginTop:20,
       }
},


});

const initailValue={
Name:"",
userName:"",
password:"",
confirmPassword:"",

}




export const AddUser = () => {
const [user, setUser] =useState(initailValue);
const {Name,userName,password,confirmPassword}=user;

let history=useNavigate();

const classes=useStyle();

const OnChangeUser= (e)=>{
console.log(user)
setUser({...user, [e.target.name]: e.target.value} );


}
const AddUserobj =async()=>{

   await AddPostUser(user);
   history("../all")
}




    
  return (
    
      <FormGroup className={classes.contenar} >
       <h1>Add users</h1>
        <FormControl>
        <FormLabel>Name</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="Name" value={Name}  />
        </FormControl>
        
        <FormControl>
        <FormLabel>User Name</FormLabel>
         <Input onChange={(e) => OnChangeUser(e)} name="userName" value={userName} />
        </FormControl>
        <FormControl>
        <FormLabel>Password</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="password" value={password} />
        </FormControl>
        <FormControl>
        <FormLabel>Confirm Password</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="confirmPassword"  value={confirmPassword} />
        </FormControl>
        <Button  variant="contained" color="primary" size="medium" onClick={(e) => AddUserobj()} >AddUser</Button>
      </FormGroup>
     
   
  )
};
