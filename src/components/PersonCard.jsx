import React from "react";

const PersonCard = (props) => {
  return (
    <div className="card mb-1 mr-1 col-2">
      <div className="card-header">{props.name}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Age: {props.age}</li>
        <li className="list-group-item">Gender: {props.gender}</li>
        <li className="list-group-item">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Details
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PersonCard;
