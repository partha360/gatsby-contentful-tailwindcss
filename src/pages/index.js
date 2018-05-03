import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
require('../layouts/index.css')
// import '../layouts/index.css'

class Layout extends React.Component {
  render() {
    const content = this.props.data.allContentfulLayout.edges
    return (
      <div className="container mx-auto my-4">
        <h1 className="text-purple-dark">Home</h1>
        <div className="flex flex-wrap items-stretch justify-around">
          {content.map(({ node }) => {
            return node.contentModules.map(({ course }) => {
              return (
                <div
                  className="font-sans max-w-sm rounded overflow-hidden shadow-lg my-4"
                  key={course.id}
                >
                  <div className="px-6 py-4">
                    <img
                      className="w-full"
                      src={course.image.resolutions.src}
                      alt={course.image.title}
                    />
                    <h2 className="font-bold text-xl mb-2">
                      {course.title} ({course.node_locale})
                    </h2>
                    <div
                      className="text-grey-dark leading-normal tracking-normal text-base"
                      dangerouslySetInnerHTML={{
                        __html: course.description.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </div>
              )
            })
          })}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query HomeContentQuery {
    allContentfulLayout {
      edges {
        node {
          slug
          title
          node_locale
          contentModules {
            course {
              id
              title
              shortDescription
              node_locale
              image {
                id
                title
                resolutions {
                  src
                  width
                  height
                }
              }
              description {
                description
                childMarkdownRemark {
                  excerpt
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`
