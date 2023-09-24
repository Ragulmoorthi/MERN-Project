import React, { useState } from "react";
export function Electronic(){
    const [order, setOrder] = useState(0)
      var booked=()=>{
        alert("order booked")
      }
    return(
        <>
        <div className="row gap-5  mt-5">
            <div className="col-lg-6 p-5">

        <iframe className="w-100 h-75" src="https://www.youtube.com/embed/XPTHS9U2TSY?si=C0dCTH9ec4gtXGgN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          <div class="card col-lg-4 "  id="electronic" >
                    <img src="https://bharatelectronicservice.com/assets/img/about-us.png" class="card-img-top w-75 mt-5" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Electronic services</h5>
                        <p class="card-text">UEP's core technology revolutionizes the chemistry found in alkaline primary batteries (e.g. double AA) and makes it rechargeable. </p>
                        <tr>
                        <td className="d-flex">

                            <button onClick={() => { setOrder(order + 1) }} className="btn btn-outline-success  mx-auto" >+</button>
                            <p> {order}Package </p>
                            <button onClick={() => { setOrder(order - 1) }} class="btn btn-outline-danger mx-auto ">-</button>
                        </td>
                    </tr>
                </div>
                <input type="button" onClick={()=>{booked()}} value="submit" className=" mt-5 btn btn-outline-success w-25 text-center" ></input>
                        
                    </div>
                    
        </div>
                
        </>
    );
}