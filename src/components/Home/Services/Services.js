import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container text-center" style={{ marginTop: '150px', marginBottom: '50px' }}>
            <h1 className="mb-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            
            <div className="row">
                {
                    services.map(allServices => <AllServices allServices={allServices} key={allServices._id}></AllServices>)
                }
            </div>

        </div>
    );
};

export default Services;