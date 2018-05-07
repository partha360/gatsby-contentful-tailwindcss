import React from 'react';
import Link from 'gatsby-link';
import * as PropTypes from 'prop-types';
import TemplateWrapper from '../components/layout';
import Helmet from 'react-helmet';

class CoursesTemplate extends React.Component {
  render() {
    const courses = this.props.data.allContentfulCourse.edges;
    return (
      <TemplateWrapper location={this.props.location}>
        {courses.map(course => {
          return (
            <div key={course.node.id} className="max-w-md w-full lg:flex my-4">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  border: '1px solid',
                  backgroundImage: `url(
                      ${course.node.image.resolutions.src}
                    )`,
                }}
                title={course.node.title}
              />
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <Link
                    className="text-black font-bold text-xl mb-2"
                    to={
                      this.props.location.pathname.replace(
                        'courses',
                        'course/'
                      ) + course.node.id.substr(0, 23)
                    }
                  >
                    {course.node.title}
                  </Link>
                  <p className="text-grey-darker text-base">
                    {course.node.shortDescription}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-black leading-none">
                      Duration: {course.node.duration}
                    </p>
                    <p className="text-grey-dark">
                      Skill Level: {course.node.skillLevel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </TemplateWrapper>
    );
  }
}

const propTypes = {
  data: PropTypes.object.isRequired,
};

CoursesTemplate.propTypes = propTypes;

export default CoursesTemplate;

export const pageQuery = graphql`
  query coursesQuery($locale: String!) {
    allContentfulCourse(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          id
          node_locale
          title
          shortDescription
          duration
          skillLevel
          image {
            resolutions {
              src
            }
          }
        }
      }
    }
  }
`;
