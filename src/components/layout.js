import React from 'react';
import LangSelect from '../components/lang-select';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';
import languages from '../data/languages';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import de from 'react-intl/locale-data/de';
import 'intl/locale-data/jsonp/de';
import Header from './header';
require('../styles/index.css');
// add concatenated locale data
addLocaleData([...en, ...de]);

const TemplateWrapper = props => {
  const url = props.location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${languages.langKey[langKey]}/`;
  let langUrl = getUrlForLang(homeLink, url);
  const langsMenu = getLangs(langs, langKey, langUrl);

  // get the appropriate message file based on langKey
  // at the moment this assumes that langKey will provide us
  // with the appropriate language code
  const i18nMessages = require(`../data/messages/${langKey}`);

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div className="container font-roboto max-w-full">
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
        <Header langs={langsMenu} location={props.location} />
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
        </div>
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;
