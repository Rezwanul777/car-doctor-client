import React from 'react';

const ServiceCard = ({service}) => {
    const{title,img,price}=service
    return (
        <div className="card  w-96 bg-base-100 shadow-xl">
  <figure className='px-10 pt-10'><img src={img} alt="Shoes" /></figure>
  <div className="card-body items-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-orange-500'>Price: ${price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;