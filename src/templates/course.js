import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import TemplateWrapper from '../components/layout';

class CourseTemplate extends React.Component {
  render() {
    const course = this.props.data.contentfulCourse;
    return (
      <TemplateWrapper location={this.props.location}>
        <h1>{course.title}</h1>
      </TemplateWrapper>
    );
  }
}

const propTypes = {
  data: PropTypes.object.isRequired,
};

CourseTemplate.propTypes = propTypes;

export default CourseTemplate;

export const pageQuery = graphql`
  query courseQuery($id: String!) {
    contentfulCourse(id: { eq: $id }) {
      id
      title
      slug
      shortDescription
      duration
      skillLevel
      lessons {
        title
      }
    }
  }
`;
