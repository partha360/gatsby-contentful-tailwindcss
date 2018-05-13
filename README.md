<!-- TOC -->

- [Gatsby-contentful-tailwindcss-mobx](#gatsby-contentful-tailwindcss-mobx)
    - [Tools Used](#tools-used)
    - [Install](#install)
    - [Develop](#develop)
    - [Contentful Setup](#contentful-setup)
    - [Production Build](#production-build)

<!-- /TOC -->

# Gatsby-contentful-tailwindcss-mobx

Gatsby-contentful-tailwindcss-mobx starter.

> This project is inspired by https://github.com/mccrodp/gatsby-starter-contentful-i18n

## Tools Used

* Gatsby v2 alpha 32
* react-intl & gatsby-plugin-i18n for localisation
* gatsby-source-contentful for contenful integration
* react v16.3.2
* tailwindcss for styling & postcss for building css
* prettier for auto code formatting
* Mobx for store & state management

## Install

Make sure that you have `yarn` installed globally:

[https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install)

Install `Gatsby CLI` globally using yarn:

```sh
yarn global add gatsby-cli
```

And from your CLI inside the cloned / forked directory run:

```sh
yarn
```

## Develop

```sh
yarn develop
```

## Contentful Setup

Make sure to have contenful project/space created already

```sh
yarn setup
```

## Production Build

```sh
yarn build
```
