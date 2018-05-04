import React from 'react'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix, navigateTo } from 'gatsby-link'
import languages from '../data/languages'

class RedirectIndex extends React.PureComponent {
  constructor(props) {
    super(props)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = languages
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${languages.langKey[langKey]}/`)
      navigateTo(homeUrl)
    }
  }

  render() {
    return <div />
  }
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
