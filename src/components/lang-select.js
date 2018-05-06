import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import languages from '../data/languages';
import DE from './icons/de';
import US from './icons/us';

function Flag(props) {
  if (props.langKey == 'de') {
    return <DE />;
  }
  return <US />;
}

const LangSelect = props => {
  const links = props.langs.map(lang => {
    let link = lang.link;
    const newLink = link.replace(lang.langKey, languages.langKey[lang.langKey]);
    return (
      <Link className="px-1" to={newLink} key={lang.langKey}>
        <Flag langKey={lang.langKey} />
      </Link>
    );
  });

  return (
    <section>
      <header className="">
        <FormattedMessage id="selectLanguage" />
      </header>
      {links}
    </section>
  );
};

LangSelect.propTypes = {
  langs: PropTypes.array,
};

export default LangSelect;
