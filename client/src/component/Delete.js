import axios from "axios";
import React, { useEffect, useState } from "react";
import './datele.css'
import { Link, useParams } from "react-router-dom";
export function Getdelete() {
    const [fetchdetail, setFetchdetail] = useState([])
    var { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:4005/getdata/')
            .then(res => res.json())
            .then(data => setFetchdetail(data))
    })
    const delt = (id) => {
        var key = { id: id }
        axios.post('http://localhost:4005/delete/:id', key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not delete")
                }
                else if (res.data.status === "success") {
                    alert("data are deleted")
                }
            })
    }
    return (
        <>
            <h1>Good Bye</h1>
            <h1 className="text-center  text-white p-2">Details</h1>
            <div className="">
                <div className="d-flex justify-content-center">
                    <table cellpadding="10px" className="bg-warning">
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>username</th>
                            <th>phone_number</th>
                        </tr>
                        {
                            fetchdetail.map((value, index) => (
                                <>
                                    <tr className="">
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.username}</td>
                                        <td>{value.phone_number}</td>
                                        <td> <Link to={`/onedata/${id}`} > View</Link></td>
                                        <td> <button className="bg-danger" onClick={() => { delt(value.id) }}>Delete</button></td>
                                    </tr>
                                </>
                            ))
                        }
                    </table>
                </div>
            </div>

        </>

    );
}