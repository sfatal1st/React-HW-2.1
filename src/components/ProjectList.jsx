const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.img} alt={project.category} />
          <h3>{project.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
