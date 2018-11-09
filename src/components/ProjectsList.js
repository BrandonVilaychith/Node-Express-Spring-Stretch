import React from 'react';
// Components import
import { Project } from '../components';

const ProjectsList = props => {
  const { projects } = props;
  return (
    <div>
      {projects.map(user => {
        return <Project user={user} key={user.id} />;
      })}
    </div>
  );
};

export default ProjectsList;
