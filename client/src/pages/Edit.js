import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMatch, useNavigate, useParams } from 'react-router-dom'
import { editPerson } from '../redux/actions/Person'

function Edit() {
  const navigate=useNavigate()
  const match=useMatch("/edit/:id")
  console.log(match.params.id)
  const dispatch=useDispatch()
  const [newEdit, setNewEdit] = useState({
    name: "",
    phone: "",
    favoriteFoods: "",
    age: "",
    email: "",
  })
  const handleChange=(e)=>{
    setNewEdit({...newEdit,[e.target.name]:e.target.value})
  }
  const handleEdit=()=>{
    dispatch(editPerson(match.params.id,newEdit))
    navigate(-1)
  }
  return (
    <div>
      <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Name</label> <br/>
     <input type="text" placeholder="Edit name" name='name' onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Phone</label> <br/>
     <input type="text" placeholder="Edit phone" name='phone' onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Favourite Foods</label> <br/>
     <input type="text" placeholder="Edit Favourite Foods" name='favoriteFoods' onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}}/> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>Age</label> <br/>
     <input type="text" placeholder="Edit age" name='age' onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}} /> <br/>
     <label style={{fontSize:"30px",color:"purple",fontFamily:'Franklin Gothic Medium'}}>email</label> <br/>
     <input type="text" placeholder="Edit email" name='email' onChange={handleChange} style={{height:"40px",width:"500px",fontSize:"20px",color:"black",fontFamily:"Courier New"}} /> <br/>
     <button onClick={handleEdit} style={{width:"130px",height:"30px",color:"purple",backgroundColor:"pink",fontFamily:'Franklin Gothic Medium'}}> Save </button>   
    </div> 
  )
}

export default Edit