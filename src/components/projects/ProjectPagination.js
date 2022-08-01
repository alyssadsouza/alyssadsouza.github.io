import React, { useEffect, useState } from "react";
import Pagination from '../Pagination';

const projects = require('../../content/projects.json')?.content ?? [];

const ProjectPagination = (props) => {
  const { project, setProject, classes } = props;

  const [index, setIndex] = useState(project.index);

  useEffect(() => {
    const newProject = projects.find(proj => proj.index === index);
    if (newProject !== undefined) {
        setProject(newProject);
    }
  }, [index]);
  
  return (
    <Pagination index={index} setIndex={setIndex} total={projects.length} />
  );
};

export default ProjectPagination;
