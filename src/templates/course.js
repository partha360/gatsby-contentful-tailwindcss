import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';
import TemplateWrapper from '../components/layout';

class CourseTemplate extends React.PureComponent {
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
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
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
