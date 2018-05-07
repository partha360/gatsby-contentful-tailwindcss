const contentfulConfig = require('./.contentful');
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful TailwindCSS Starter',
    languages,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
  ],
};
