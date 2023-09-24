import React from "react";
import { useState } from "react";
export function Ac() {
    const [order, setOrder] = useState(0)
    var booked=()=>{
        alert("order booked")
      }
   
    return (
        <>
            <div className="row  gap-5 mt-5">
                <div className="col-lg-6">
                <iframe className="w-100 h-75"  src="https://www.youtube.com/embed/eZt2iH3u4Yg?si=hiPeddqz9VPoJpsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="card col-lg-4">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/supply/customer-app-supply/1682663467876-a0c44c.jpeg" class="card-img-top  " />
                    <div class="card-body">
                        <h5 class="card-title">Ac services</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <tr>
                        <td className="d-flex">
                            <button onClick={() => { setOrder(order + 1) }} className="btn btn-primary  mx-auto" >+</button>
                          
                            <p> {order}Package </p>
                            <button onClick={() => { setOrder(order - 1) }} class="btn btn-danger mx-auto ">-</button>
                            
                        </td>
                            <input type="button" onClick={()=>{booked()}}  value="submit" className="  btn btn-outline-success mt-3 w-50" ></input>
                    </tr>
                </div>

            </div>
        </>
    );
}