import React from 'react';
import PropTypes from 'prop-types';
import { getUserLangKey, getCurrentLangKey } from 'ptz-i18n';
import Link, { withPrefix } from 'gatsby-link';
import languages from '../data/languages';
import LangSelect from './lang-select';

const Header = props => {
  const url = props.location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeUrl = withPrefix(`/${languages.langKey[langKey]}/`);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-grey-dark p-2">
      <div>
        <LangSelect langs={props.langs} />
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <Link
          to={homeUrl}
          className="bg-red no-underline mx-2
          hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-grey rounded"
        >
          Home
        </Link>
        <Link
          to={homeUrl + 'courses'}
          className="bg-red no-underline
          hover:bg-black text-white font-bold py-2 px-4 border-b-4 border-black hover:border-grey rounded"
        >
          Courses
        </Link>
        <a
          className="px-2"
          target="_new"
          href="https://github.com/partha360/gatsby-contentful-tailwindcss"
        >
          <img
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            width="50"
          />
        </a>
        <a
          target="_new"
          href="https://discovery.contentful.com/entries/by-content-type?delivery_access_token=&preview=true&preview_access_token=2cc07c4e30a4f8c08be0e2fa107113519e70a411c906f141b095f03709a454d1&space_id=vp7tbc13ag5p"
        >
          <img
            src="https://d21buns5ku92am.cloudfront.net/41748/images/265846-Mark_Circular_darkBg_800x800-dd92d6-large-1511779631.png"
            width="50"
          />
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  langs: PropTypes.array,
};

export default Header;
