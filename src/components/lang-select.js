import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import languages from '../data/languages';
import DE from './icons/de';
import US from './icons/us';

function flag(lang) {
  if (lang === 'de') {
    return <DE />;
  }
  return <US />;
}

const LangSelect = props => {
  const links = props.langSet.map(lang => {
    const newLink = lang.link.replace(
      lang.langKey,
      languages.langKey[lang.langKey]
    );
    return (
      <Link className="px-1" to={newLink} key={languages.langKey[lang.langKey]}>
        {flag(lang.langKey)}
      </Link>
    );
  });

  return (
    <div>
      <FormattedMessage id="selectLanguage" /> <br />
      {links}
    </div>
  );
};

LangSelect.propTypes = {
  langSet: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LangSelect;
