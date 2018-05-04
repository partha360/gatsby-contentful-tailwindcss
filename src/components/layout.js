import React from 'react'
import LangSelect from '../components/lang-select'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, addLocaleData } from 'react-intl'
//import { rhythm } from '../utils/typography'
import 'intl'
import languages from '../data/languages'

import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import de from 'react-intl/locale-data/de'
import 'intl/locale-data/jsonp/de'
require('../styles/index.css')
// add concatenated locale data
addLocaleData([...en, ...de])

const TemplateWrapper = props => {
  const url = props.location.pathname
  const { langs, defaultLangKey } = languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  // get the appropriate message file based on langKey
  // at the moment this assumes that langKey will provide us
  // with the appropriate language code
  const i18nMessages = require(`../data/messages/${langKey}`)

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div className="container mx-auto my-4">
        <Helmet
          title="Gatsby Contentful TailwindCSS starter"
          meta={[
            {
              name: 'description',
              content: 'Gatsby Contentful TailwindCSS starter',
            },
            {
              name: 'keywords',
              content: 'gatsby, Contentful, tailwindcss, starter',
            },
          ]}
        />
        <LangSelect langs={langsMenu} />
        <div
          style={{
            margin: `0 auto`,
            marginTop: 10,
            marginBottom: 10,
            maxWidth: 650,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          {props.children}
          <hr style={{ marginTop: 20 }} />
          <p>
            The src for this website is at
            {` `}
            <a
              target="_new"
              href="https://github.com/partha360/gatsby-contentful-tailwindcss"
            >
              GitHub Source
            </a>
          </p>
          <p>
            The Contentful site that is providing the data for this site is at
            {` `}
            <a
              target="_new"
              href="https://discovery.contentful.com/entries/by-content-type?delivery_access_token=&preview=true&preview_access_token=2cc07c4e30a4f8c08be0e2fa107113519e70a411c906f141b095f03709a454d1&space_id=vp7tbc13ag5p"
            >
              Contentful discovery site
            </a>
          </p>
        </div>
      </div>
    </IntlProvider>
  )
}

export default TemplateWrapper
