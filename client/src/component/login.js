import axios from "axios";
import React, { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import { Link } from "react-router-dom";
export function Login(){
    useEffect(()=>{
        Aos.init();
    })
    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value

        var key={
            username:username,
            password:password
        }
        if (username==""){
            alert("enter the user name")
        }
        else if(password==""){
            alert("enter the password")
        }
        else{
            axios.post('http://localhost:4005/servicespage',key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("invalid user")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    alert("login successly")
                    window.location.href=`/testing/${id}`
                }
                else if(res.data.status==="invalid_user"){
                    alert("invalid password")
                }
                else if(res.data.status==="Both_are_invalid"){
                    alert("username and password are invalid")
                }
                else{
                    alert("contact admin")
                }
            })
        }
    }
    return(
        <>
        <div className="text-center mainForm p-5" >
            <h1>Login</h1>
            <form onSubmit={handlelogin} className="d-flex justify-content-center mt-5 " data-aos="fade-up">
                <table >
            <tr className=" " >
                <td ><label>Enter username</label></td>
                <td><input type="text" id="username"></input></td>
            </tr>
            <tr  >
                <td><label className="p-4">Enter password</label></td>
                <td><input type="password" id="password"></input></td>
            </tr>
            <tr><td><input type="submit" value="login" className=" mt-5 btn btn-outline-success " /></td></tr>
              
             
            </table>

            </form>

        </div>
        </>
    )
}