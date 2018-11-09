import React, { Component } from 'react';
// Redux imports
import { connect } from 'react-redux';
// Action import
import { fetchProjects } from '../actions';
// Components imports
import { ProjectsList } from '../components';

class HomePageView extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        <ProjectsList projects={projects} />
      </div>
    );
  }
}

// Puts the state into the props
const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
};

// Connects the states and actions to the props
export default connect(
  mapStateToProps,
  { fetchProjects }
)(HomePageView);
