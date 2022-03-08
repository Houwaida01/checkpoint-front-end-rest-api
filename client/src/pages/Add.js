import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../redux/actions/Person";
import {Form,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
function Add() {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [newPerson, setNewPerson] = useState({
    name: "",
    phone: "",
    favoriteFoods: "",
    age: "",
    email: "",
  });
  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]:e.target.value });
  };
  const handleAdd = () => {
    dispatch(addPerson(newPerson));
    navigate(-1)
  };
  return (
    <div>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Name</label> <br/>
     <input type="text" placeholder="Enter name" name="name" onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Phone</label> <br/>
     <input type="text" placeholder="Enter phone" name="phone" onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Favourite Foods</label> <br/>
     <input type="text" placeholder="Enter favourite foods" name="favoriteFoods" onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Age</label> <br/>
     <input type="text" placeholder="Enter age" name="age" onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>email</label> <br/>
     <input type="text" placeholder="Enter email" name="email" onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <button onClick={handleAdd} style={{width:"130px",height:"30px",color:"purple",backgroundColor:"pink",fontFamily:'Franklin Gothic Medium'}}> ADD </button>
    </div>
  );
}

export default Add;
