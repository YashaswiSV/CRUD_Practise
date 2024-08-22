import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";



const Display = () => {
    
     const [mydata , setmyData]=useState([]);

      
     const loadData=()=>{
        let url="http://localhost:3000/Employee";
        axios.get(url).then((res)=>{
            setmyData(res.data);
        })
     }
     useEffect(()=>{
        loadData();
     },[])

     const ans=mydata.map((key)=>{
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
           <Table>
                 <thead>
                    <tr>
                        <th>Employee no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                 </thead>
                 <tbody>
                    {ans}
                 </tbody>


           </Table>
        
        
        
        </>
     );
}
 
export default Display;