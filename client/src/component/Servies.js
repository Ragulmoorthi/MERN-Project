import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import 'aos/dist/aos.css'
import Aos from "aos";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHandshake } from "@fortawesome/free-regular-svg-icons"
import {  Link, useParams } from "react-router-dom";


export function Webpage() {
    useEffect(()=>{
        Aos.init({
            delay: 100
        });
    })
    var {id}=useParams()
    const [fname,setFname]=useState('')
    const[lname,setLname]=useState('')
     
    useEffect(()=>{
        
        fetch("http://localhost:4005/onedata/"+id)
        .then(frist=>frist.json())
        .then((out)=>{
            setFname(out[0].username)
            setLname(out[0].password)
        })
    })
    return (
        <>
        <div className="">
        {/* <span><FontAwesomeIcon icon={faHandshake} /></span> */}
        <h1 className="mt-5 col-lg-6 text-center">Habibi Home
         <Typewriter
                    options={{strings: ['Services', 'Available'],autoStart: true,loop: true,}}/>
                </h1>
                <p className="col-lg-6 col-sm-12 text-white">Habibi areas usually refer to cities, suburbs and towns. Rural areas usually refer to villages. Urban areas have more development in terms of access to infrastructure and connectivity like airports, ports, railways, housing, roads etc. Rural areas usually don't have much development in terms of infrastructure</p>
            <div className="row ">
                <img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Urbanclap.png" className="container-fluid col-lg-6 " />
                
            </div>
             <Link to={`/change/${id}`} className="btn btn-outline-warning">Update</Link><br/>
             <Link to={`/remove/${id}`} className="btn btn-outline-danger mt-3">Remove Account</Link>
            <div className="row gap-5 mt-5 d-flex justify-content-evenly mb-3 serList" data-aos="fade-up">
               
                <div class="card col-lg-3" id="salon"  >
                    <img src="https://t3.ftcdn.net/jpg/01/90/13/92/360_F_190139228_I1pNZawlCEjpaOHN2f6aeECLwIU8wWG4.jpg" class="card-img-top w-50" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">salon for women</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    <Link to="/viste" className="btn btn-outline-primary">Book</Link>
                </div>
                <div class="card col-lg-3" id="Ac" data-aos="fade-up" >
                    <img src="https://www.vhv.rs/dpng/d/520-5207216_air-conditioning-repair-png-beitou-hot-spring-museum.png " class="card-img-top w-50" />
                    <div class="card-body">
                        <h5 class="card-title">Ac services</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        
                    </div>
                    <Link to="/viste2" className="btn btn-outline-primary">Book</Link>
                </div>

                <div class="card col-lg-3" id="electronic"data-aos="fade-up" >
                    <img src="https://bharatelectronicservice.com/assets/img/about-us.png" class="card-img-top w-75" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Electronic services</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                       
                        {/* <Link to={`/viste/${sername}`}></Link> */}
                    </div>
                    <Link to="/viste3" className="btn btn-outline-primary">Book</Link>
                </div>
            </div>
        </div>
         
   {/* <Link to={`/Update/${id}`}><button>View</button></Link> */}
        </>
    )
}