import axios from "axios";
import { useEffect, useState } from "react";




const Update=()=>{
     
      const[mydata ,setmydata]=useState([]);
      const[editdata , seteditdata]=useState({});

     
        const loadData=()=>{
             let url="http://localhost:3000/Employee";
             axios.get(url).then((res)=>{
               setmydata(res.data)
               console.log(res.data);
             })
        }
        useEffect(()=>{
          loadData();
        })

        const dele=(myid)=>{
          let url=`http://localhost:3000/Employee/${id}`;
          axios.delete(url).then((res)=>{
            alert("deleted")
            seteditdata(res.data)
          })


        }
        const edit=(myid)=>{
          let url=`http://localhost:3000/Employee/${id}`;
          axios.get(url).then((res)=>{
            
            seteditdata(res.data)
          })


        }
        const handledata=(e)=>{
            let name=e.target.name;
            let value=e.target.value;

            seteditdata(values=>({...values,[name]:value}));
        }
        const handlesubmit=(e)=>{
          let url="http://localhost:3000/Employee";
          axios.put(url,editdata).then((res)=>{
            alert("edited data submitted ")
          })

        }



        const ans=mydata.map((key)=>{
            return(
              <>
                 <tr>
                    <td>{key.empno}</td>
                    <td>{key.name}</td>
                    <td>{key.age}</td>
                    <td>{key.salary}</td>

                    <td>
                      <a href="">
                        <img src="/public/imagess/deleteicon.png" alt="" width={"20px"} onClick={()=>{dele(key.id)}}/>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <img src="/public/imagess/editicon.png" alt="" width={"20px"}  onClick={()=>{edit(key.id)}}/>
                      </a>
                    </td>


                 </tr>

               
              
              </>
            )
        })




    return(
        <>
        <Table>
              <thead>
                   <tr>
                      <th>Empno</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th></th>

                   </tr>
                 
              </thead>
              <tbody>
                {ans}

              </tbody>



        </Table>

        <hr />

<div>
         Enter empno: <input type="number"  name="empno" value={editdata.empno} onChange={handledata}/>
         <br />
         Enter Name: <input type="text"  name="name" value={editdata.name} onChange={handledata}/>
         <br />
         Enter Age: <input type="number"  name="age" value={editdata.age} onChange={handledata}/>
         <br />
         Enter Salary: <input type="number"  name="salary" value={editdata.salary} onChange={handledata}/>
         <br />
         <button onClick={handlesubmit}>Save Edit</button>







</div>

        </>
    )
}
export default Update;


