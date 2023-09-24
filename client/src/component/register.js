import React from "react";
import axios from 'axios'
export function Register() {
    function handlelogin(event) {
        event.preventDefault()
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var number = document.getElementById("phone").value
        var passWord = document.getElementById("pass").value

        var key = {
            name: name,
            email: email,
            number: number,
            passWord: passWord
        }
        if (name == "") {
            alert("Enter the name")
        }
        else if (email == "") {
            alert("Enter the Email")
        }
        else if (number = "") {
            alert("Enter the Mobile number")
        }
        else if (passWord == "") {
            alert("Enter the password")
        }
        else {
            axios.post("http://localhost:4005/register", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not insert")
                        window.location.reload()
                        // console.log(key)
                    }
                    else if (res.data.status === "success") {
                        alert("data insert")
                        window.location.href = '/login'
                    }
                })
        }
    }

    return (
        <>

            <div className="text-center w-100 mt-5 mainForm">
            <span>
            
            {/* <FontAwesomeIcon icon={faHandHoldingHeart} /> */}
            </span>
                <h1> Register</h1>
                <form onSubmit={handlelogin} className="container-fluid d-flex justify-content-center " >
                    <table >

                        <tr >
                            <td className="p-5"><label>Enter the name</label></td>
                            <td><input type="text" placeholder="name" id="name"></input></td>
                        </tr>

                        <tr>
                            <td><label>Enter the email</label></td>
                            <td><input type="text" placeholder="Email" id="email"></input></td>
                        </tr>
                        <tr>
                            <td className="p-5"><label>Enter the phone_number</label></td>
                            <td><input type="number" placeholder="phone number" id="phone"></input></td>
                        </tr>
                        <tr>
                            <td><label>Enter the passWord</label></td>
                            <td>
                                <input type="password" placeholder="password" id="pass"></input>
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
                            </td>
                        </tr> */}
                        <tr><td><input type="submit" value="login" className=" mt-5 btn btn-outline-success " /></td> 
                         </tr>
                        
                    </table>
                </form>
            </div>
        </>
    )
}