import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Update(){

    let {id}=useParams()
    
    const[name,setName]=useState('')
    const[phonenumber,setPhonenumber]=useState('')
    const[pass,setPass]=useState('')
    // const[roll,setRoll]=useState('')

    useEffect(()=>{
        fetch("http://localhost:4005/onedata/"+id)
        .then(res=>res.json())
        .then((data)=>{ 
        setName(data[0].name)
        setPhonenumber(data[0].phonenumber)
        setPass(data[0].pass) 
        // setRoll(data[0].roll)  
    }
        )
    },[])
    function  handleupdate(event){
        event.preventDefault()
        var name = document.getElementById("name").value
        var phonenumber = document.getElementById("phone").value
        var pass = document.getElementById("pass").value
        // var roll=document.getElementById("roll").value
        var key={
            name:name,
            phonenumber:phonenumber,
            pass:pass
            // roll:roll
        }
        if(name==""){
            alert("enter user name")
         }
         else if (pass==""){
            alert("Enter name")
         }
         else if(phonenumber==""){
            alert("Enter number")
         }
        //  else if(roll==""){
        //     alert("Enter roll")
        //  }
         else{
            axios.put('http://localhost:4005/update/'+id,key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("Recheck")
                }
                else if(res.data.status==="updated"){
                    alert("updated")
                }
            })
        }
    }
    return(
        <>
          <form onSubmit={handleupdate} className="container-fluid d-flex justify-content-center  " > 
                    <table className="mt-4 text-center bg-info" >

                        <tr >
                            <td className="p-5"><label>Enter the name</label></td>
                            <td><input type="text" placeholder="name" id="name" value={name} onChange={(a)=>setName(a.target.value)}/></td>
                        </tr>

                        {/* <tr>
                            <td><label>Enter the email</label></td>
                            <td><input type="text" placeholder="Email" id="email"></input></td>
                        </tr> */}
                        <tr>
                            <td className="p-5"><label>Enter the phone_number</label></td>
                            <td><input type="number" placeholder="phone number" id="phone" value={phonenumber} onChange={(a)=>setPhonenumber(a.target.value)}/></td>
                        </tr>
                        <tr>
                            <td className="p-5"><label>Enter the passWord</label></td>
                            <td>
                                <input type="password" placeholder="password" id="pass" value={pass} onChange={(a)=>setPass(a.target.value)}/>
                            </td>
                        </tr> 
                        {/* <tr>
                            <td className="p-3"><label>Roll</label></td>
                            <td>
                                <select>
                                    <option>select Roll</option>
                                    <option value="worker">Worker</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <input type="text" placeholder="roll" id="roll" value={roll} onChange={(a)=>setRoll(a.target.value)}/>
                            </td>
                        </tr>  */}
                        <tr><td><input type="submit" value="Update" className=" mt-5 btn btn-outline-success " /></td> </tr>
                    </table> 
                    </form>
        </>
    )
}