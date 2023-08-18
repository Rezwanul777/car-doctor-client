import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const[services,setServices]=useState([])

    // data loading
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="mt-6">
            <div className="text-center">
                <h3 className="text-2xl text-orange-600 font-semibold">Service</h3>
                <h2 className="text-3xl text-gray py-2">Our Service Section</h2>
                <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service =><ServiceCard key={service._id} service={service}/>)
                }
            </div>

        </div>
    );
};

export default Services;