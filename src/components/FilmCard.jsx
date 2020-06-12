import React from "react";

const FilmCard = (props) => {
  return (
<div className="card bg-light mb-3">
  <div className="card-header">{props.title}</div>
  <div className="card-body">
    <p className="card-text">{props.descr}</p>
  </div>
</div>
  );
};

export default FilmCard;
