import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import TemplateWrapper from '../components/layout';
import Helmet from 'react-helmet';

class CourseTemplate extends React.Component {
  render() {
    const course = this.props.data.contentfulCourse;
    return (
      <TemplateWrapper location={this.props.location}>
        <Helmet title={course.title} />
        <img
          className="w-full"
          src={course.image.resolutions.src}
          alt={course.image.title}
        />
        <h1>{course.title}</h1>
        <h2>{course.shortDescription}</h2>
        <div
          className="text-grey-dark leading-normal tracking-normal text-base"
          dangerouslySetInnerHTML={{
            __html: course.description.childMarkdownRemark.html,
          }}
        />
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
      image {
        resolutions {
          src
        }
      }
      description {
        description
        childMarkdownRemark {
          excerpt
          html
        }
      }
      lessons {
        title
      }
    }
  }
`;
