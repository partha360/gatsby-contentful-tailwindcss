import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';
import 'intl';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import de from 'react-intl/locale-data/de';
import 'intl/locale-data/jsonp/de';

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import languages from '../data/languages';
import Header from './header';

require('../styles/index.css');

// add concatenated locale data
addLocaleData([...en, ...de]);

class TemplateWrapper extends React.PureComponent {
  render() {
    const url = this.props.location.pathname;
    const { langs, defaultLangKey } = languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${languages.langKey[langKey]}/`;
    const langUrl = getUrlForLang(homeLink, url);
    const langsMenu = getLangs(langs, langKey, langUrl);

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    const i18nMessages = require(`../data/messages/${langKey}`);
    return (
      <IntlProvider locale={langKey} messages={i18nMessages}>
        <div className="container font-roboto max-w-full">
          <Helmet
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
          <Header langsMenu={langsMenu} location={this.props.location} />
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
            {this.props.children}
            <hr style={{ marginTop: 20 }} />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

TemplateWrapper.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TemplateWrapper;
