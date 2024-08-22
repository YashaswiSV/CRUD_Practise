import axios from "axios";
import { useState } from "react";
import { Table } from "react-bootstrap";

const Search = () => {

 const [rno , setmyrno]=useState("");
 const [mydata, setmydata]=useState([]);
  
   let um=true;
    const searchhandle=()=>{

        let url=`http://localhost:3000/Employee/?empno=${rno}`;
        axios.get(url).then((res)=>{
           
          setmydata(res.data)
            // alert("displayiinggg!!!!!!")

        })
    }

        let anss=mydata.map((key)=>{
            return(
                <>
                  <tr>
                       <td>{key.empno}</td>
                       <td>{key.name}</td>
                       <td>{key.age}</td>
                       <td>{key.salary}</td>
                  </tr>
                
                </>
            )
        })


    

    return ( 
        <>
        <center>
            <h1>Search</h1>
            <input type="number" value={rno} onChange={(e)=>setmyrno(e.target.value)}/>
            <button onClick={searchhandle}>Search</button>
        </center>
        <br /> 
         <Table>
               <thead>
                    <tr>
                        <th>Empno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
               </thead>
               <tbody>
                {anss}
               </tbody>



         </Table>
       

        </>
     );
}
 
export default Search;