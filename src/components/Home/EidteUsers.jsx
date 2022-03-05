import { FormControl, FormGroup, FormLabel, Input,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { EditePostUser, getUsers } from "../../service/api";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";
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




export const EidteUsers = () => {
const [user, setUser] =useState(initailValue);
const {Name,userName,password,confirmPassword}=user;

let history=useNavigate();
const {id} = useParams();

const classes=useStyle();


useEffect(()=>{

LoredUsers()

},[])

const LoredUsers=async()=>{

  const respones =  await getUsers(id)
   setUser(respones.data)
}


const OnChangeUser= (e)=>{
console.log(user)
setUser({...user, [e.target.name]: e.target.value} );


}
const AddUserobj =async()=>{

    await EditePostUser(id,user);
    history("../all")
 }




    
  return (
    
      <FormGroup className={classes.contenar} >
       <h1>Edit Users</h1>
        <FormControl>
        <FormLabel>Name</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="Name" value={Name}  />
        </FormControl>
        <FormControl>
        <FormLabel>UserName</FormLabel>
         <Input onChange={(e) => OnChangeUser(e)} name="userName" value={userName} />
        </FormControl>
        <FormControl>
        <FormLabel>Password</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="password " value={password} />
        </FormControl>
        <FormControl>
        <FormLabel>Confirm Password</FormLabel>
         <Input  onChange={(e) => OnChangeUser(e)} name="confirmPassword"  value={confirmPassword} />
        </FormControl>
        <Button  variant="contained" color="primary" size="medium" onClick={(e) => AddUserobj()} >Edit User</Button>
      </FormGroup>
     
   
  )
};
