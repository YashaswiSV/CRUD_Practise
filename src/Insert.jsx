import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const Insert = () => {
const [mydata , setmyData]=useState({});

const handledata=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setmyData(values=>({...values,[name]:value}));
       
}
const handlesubmit=(e)=>{
    e.preventDefault();
    let url="http://localhost:3000/Employee";
    axios.post(url,mydata).then((res)=>{
        alert("data submitted !!!!")
        console.log(res.data);
        setmyData("");
    })
}


    return ( 
        <>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Employee no</Form.Label>
        <Form.Control type="number" name="empno" value={mydata.empno} onChange={handledata} />
        <br />
        
         <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.name} onChange={handledata} />
         <br />

         <Form.Label>Enter age</Form.Label>
        <Form.Control type="number" name="age" value={mydata.age} onChange={handledata} />
        <br />

         <Form.Label>Enter salary</Form.Label>
        <Form.Control type="number" name="salary" value={mydata.salary} onChange={handledata} />
        <br />


       
      </Form.Group>

    
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
        
        
        </>
     );
}
 
export default Insert;