import React from "react";

const ServiceCard = ({serv}) => {
  return (
    <article className="col-6">
      <div className="card">
        <img src={serv.image} className="card-img-top" alt={serv.name} />
        <div className="card-body">
          <h5 className="card-title">{serv.name}</h5>
          <p className="card-text">{serv.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
