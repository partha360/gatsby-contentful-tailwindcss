import React from 'react';
import { FormattedMessage, IntlProvider, addLocaleData } from 'react-intl';
import { configure, shallow } from 'enzyme';
import Link from 'gatsby-link';
import 'intl';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import de from 'react-intl/locale-data/de';
import 'intl/locale-data/jsonp/de';
import Adapter from 'enzyme-adapter-react-16';
import languages from '../../data/languages';
import LangSelect from '../lang-select';
import DE from '../icons/de';
import US from '../icons/us';

function flag(lang) {
  if (lang === 'de') {
    return <DE />;
  }
  return <US />;
}

configure({ adapter: new Adapter() });

const langSet = [
  {
    langKey: 'en-US',
    link: '/en-US/',
    selected: false,
  },
  {
    langKey: 'de',
    link: '/de/',
    selected: false,
  },
];
const i18nMessages = require(`../../data/messages/en-US`);

describe('Header with Navigation', () => {
  beforeEach(() => {
    // add concatenated locale data
    addLocaleData([...en, ...de]);
  });

  it('should render component without crash', () => {
    expect(shallow(<LangSelect langSet={langSet} />));
  });

  it('should render message at the top with appropriate langulage', () => {
    expect(
      shallow(
        <IntlProvider locale="en" messages={i18nMessages}>
          <FormattedMessage id="selectLanguage" />
        </IntlProvider>
      )
    );
  });

  it('should render respective language flag icons', () => {
    expect(
      langSet.map(lang => {
        const newLink = lang.link.replace(
          lang.langKey,
          languages.langKey[lang.langKey]
        );
        return (
          <Link
            className="px-1"
            to={newLink}
            key={languages.langKey[lang.langKey]}
          >
            {flag(lang.langKey)}
          </Link>
        );
      })
    );
  });
});
