import React from "react";

const ProjectDetails = props => {
  //this props are passed from the route
  //inspect the page
  const id = props.match.params.id;
  return (
    <div className="container section project details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project title {id}
            <p>qualquer coisa</p>
          </span>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Me</div>
          <div>14 Jan</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
