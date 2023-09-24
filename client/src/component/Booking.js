import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Booking() {
    const [order, setOrder] = useState(0)
      var booked=()=>{
        alert("order booked")
      }
    // let {id}=useParams()
    
    // const[name,setName]=useState('')
    // const[phonenumber,setPhonenumber]=useState('')
    // const[pass,setPass]=useState('')

    // useEffect(()=>{
    //     fetch("http://localhost:4005/onedata/"+id)
    //     .then(res=>res.json())
    //     .then((data)=>{ 
    //     setName(data[0].name)
    //     setPhonenumber(data[0].phonenumber)
    //     setPass(data[0].pass)   
    // }
    //     )
    // },[])
    // function  handleupdate(event){
    //     event.preventDefault()
    //     var fname = document.getElementById("name").value
        
    //     var phone = document.getElementById("phone").value
    //     var pass = document.getElementById("pass").value
    //     var key={
    //         name:name,
    //         phonenumber:phonenumber,
    //         pass:pass
           
    //     }
    //     if(name==""){
    //         alert("enter user name")
    //      }
    //      else if (pass==""){
    //         alert("Enter name")
    //      }
    //      else if(phonenumber==""){
    //         alert("Enter number")
    //      }
    //      else{
    //         axios.put('http://localhost:4005/update/'+id,key)
    //         .then((res)=>{
    //             if(res.data.status==="error"){
    //                 alert("recheck")
    //             }
    //             else if(res.data.status==="updated"){
    //                 alert("updated")
    //             }
    //         })
    //     }
    // }
    return (
        <>
            <h1 className="text-center">Book Your Order</h1>
            {/* <form onSubmit={handleupdate} className="container-fluid d-flex justify-content-center " > */}
                    {/* <table >

                        <tr >
                            <td className="p-5"><label>Enter the name</label></td>
                            <td><input type="text" placeholder="name" id="name" value={name} onChange={(a)=>setName(a.target.value)}/></td>
                        </tr>

                        <tr>
                            <td><label>Enter the email</label></td>
                            <td><input type="text" placeholder="Email" id="email"></input></td>
                        </tr>
                        <tr>
                            <td className="p-5"><label>Enter the phone_number</label></td>
                            <td><input type="number" placeholder="phone number" id="phone" value={phonenumber} onChange={(a)=>setPhonenumber(a.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Enter the passWord</label></td>
                            <td>
                                <input type="password" placeholder="password" id="pass" value={pass} onChange={(a)=>setPass(a.target.value)}/>
                            </td>
                        </tr> 
                        <tr>
                            <td className="p-3"><label>Roll</label></td>
                            <td>
                                <select>
                                    <option>select Roll</option>
                                    <option value="worker">Worker</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </td>
                        </tr> 
                        <tr><td><input type="submit" value="login" className=" mt-5 btn btn-outline-success " /></td> </tr>
                    </table> */}
            <div class="row gap-5 mt-5">
                <div class="col-lg-6 p-5">
                    <iframe className="w-100 h-75" src="https://www.youtube.com/embed/CLdJNMQBLOI?si=IfqBYVq060Wb01EV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="card col-lg-4" >
                    <img src="https://www.adgully.com/img/800/201906/urbanclap_kriti-sanon.jpg" class="card-img-top container-fluied" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">salon for menand women</h5>
                        <p class="card-text">Tired of going to the salon? Urban Company provides services like Waxing, Facial, Manicure, Pedicure from senior beauticians at home near you.</p>

                    </div>


                    <tr>
                        <td className="d-flex">

                            <button onClick={() => { setOrder(order + 1) }} className="btn btn-outline-primary  mx-auto" >+</button>
                            <p> {order}Package </p>
                            <button onClick={() => { setOrder(order - 1) }} class="btn btn-outline-danger mx-auto ">-</button>
                        </td>
                    </tr>
                <input type="button" onClick={()=>{booked()}} value="submit" className=" mt-5 btn btn-outline-success w-50 " ></input>
                </div>
            </div>
                {/* </form> */}

        </>
    );
}