import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import empService from '../service/emp.service';

const Editemp = () => {

    const [Emp , setEmp] = useState({

        id : " ",
        firstname : " ",
        lastname : " ",
        street : " ",
        address : " ",
        state : " ",
        city : " ",
        email : " ",
        phonenumber : " ",
        });
        
      const[msg, setMsg] = useState(" ");

      const data = useParams();
      const navigate = useNavigate();
          
       useEffect(()=>{
        empService
        .getEmpById(data.id)
        .then((res)=>{
           setEmp(res.data);
        })
        .catch((error)=>{
          console.log(error);
        });
       },[]);

        
        const handleChange = (e) =>{
          const value = e.target.value;
          setEmp({...Emp,[e.target.name]: value});
        };
        
        const updateEmp =(e)=>{
          e.preventDefault();
        empService.updateEmp(Emp.id ,Emp).then((res)=>{
            navigate("/");
        }).catch((error)=>{
          console.log(error);
        });
    };

  return (

    <div className="container">
     <div className="row">
    <div className="col-md-6 offset-md-3">
    <div className="card">
     <div className="card-header  text-center  fs-3"> EDIT EMP 
 
     {
      msg && <p className='text-success'> {msg} </p>
     }
     
     </div>
    <div key="tbody" className="card-body" >

    <form onSubmit={(e)=>updateEmp(e)}>

    <div className="mb-3">
     <label>Enter EMP ID</label>
     <input  type="text" className="form-control" name="id" value={Emp.id} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter First Name</label>
     <input  type="text" className="form-control"  name='firstname' value={Emp.firstname} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter Last Name</label>
     <input  type="text" className="form-control" name='lastname'  value={Emp.lastname} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter Street</label>
     <input  type="text" className="form-control" name='street'   value={Emp.street} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter Address</label>
     <input  type="text" className="form-control" name='address' value={Emp.address} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter City</label>
     <input  type="text" className="form-control" name='city' value={Emp.city} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter State</label>
     <input  type="text" className="form-control" name='state' value={Emp.state} onChange ={(e)=>handleChange(e)}/>   
     </div>
     
     <div className="mb-3">
     <label>Enter Email</label>
     <input  type="text" className="form-control" name='email' value={Emp.email} onChange ={(e)=>handleChange(e)}/>   
     </div>

     <div className="mb-3">
     <label>Enter Phone Number</label>
     <input  type="text" className="form-control" name='phonenumber' value={Emp.phonenumber} onChange ={(e)=>handleChange(e)}/>   
     </div>
    
    <div className="text-center ">
    <button className="btn btn-success" > Submit </button>
    <input type="Reset" className="btn btn-danger ms-3" value="Reset"/>
    </div>
    
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
   
  );
};
export default Editemp;