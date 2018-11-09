import React from 'react';

const Project = props => {
  const { name, description } = props.user;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Project;
