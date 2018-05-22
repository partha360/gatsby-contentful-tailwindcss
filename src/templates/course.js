import React from 'react';
import Helmet from 'react-helmet';
import { observer, inject, propTypes } from 'mobx-react';
import * as PropTypes from 'prop-types';
import TemplateWrapper from '../components/layout';

@inject('Store')
@observer
class CourseTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.props.Store.setTitle(this.props.data.contentfulCourse.title);
  }

  render() {
    const course = this.props.data.contentfulCourse;
    this.props.Store.setTitle(this.props.data.contentfulCourse.title);
    return (
      <TemplateWrapper location={this.props.location}>
        <Helmet title={this.props.Store.title} />
        <img
          className="w-full"
          src={course.image.resolutions.src}
          alt={course.image.title}
        />
        <h1>{this.props.Store.getTitle}</h1>
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

const propType = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  Store: propTypes.observableObject.isRequired,
};

CourseTemplate.propTypes = propType;

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
