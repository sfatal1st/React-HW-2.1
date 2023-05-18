import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projectData from './projectData';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
    });
  };

  filterProjects = () => {
    const projects = projectData;
    const { selectedFilter } = this.state;

    if (selectedFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === selectedFilter);
  };

  render() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const { selectedFilter } = this.state;
    const filteredProjects = this.filterProjects();

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
