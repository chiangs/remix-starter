# Welcome to Remix!

This is a starter repo as an example to configure the project with:
- TypeScript
- Prettier
- Jest
- [Jest-DOM](https://github.com/testing-library/jest-dom)
- [React-Testing-Library](https://testing-library.com/docs)
- [React-Testing-Library User-Event](https://github.com/testing-library/user-event)
- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [ESLint Plugin: Testing-Library](https://testing-library.com/docs/ecosystem-eslint-plugin-testing-library)
- [ESLint Plugin: Jest-DOM](https://github.com/testing-library/eslint-plugin-jest-dom)
- [Alias-HQ](https://github.com/davestewart/alias-hq).
- Internally served font example.
- Error boundaries for the root and a main route example.
- SEO with Meta tags.
- Misc. structural best practices.
- Misc. quality of life and minor opinions.

If you know the target server (Netlify or Vercel for example), then see [DIY](#diy).

**Remember to update after cloning**

```sh
yarn upgrade-interactive --latest
```

- [Remix Docs](https://remix.run/docs)

<!-- TOC -->

- [Welcome to Remix!](#welcome-to-remix)
  - [Development](#development)
    - [Start development server](#start-development-server)
    - [Lint files](#lint-files)
    - [Format files](#format-files)
    - [Test](#test)
  - [Deployment](#deployment)
    - [DIY](#diy)
    - [Using a Template](#using-a-template)
    - [Additional / TODO](#additional--todo)

<!-- /TOC -->

## Development

From your terminal:

### Start development server
```sh
yarn dev
```

### Lint files
```sh
yarn lint
```

### Format files
```sh
yarn format
```

### Test

Remix uses ESbuild and this project makes use jest.config as a module hence the `*.msj` file extension.
File path aliases are generated via `ts.config` using a library called `alias-hq`.

```sh
yarn test
```
To run alias-hq after updating the project structure for your purposes:

```sh
yarn alias-hq
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
# copy over the packet.json and 
yarn install
```

### Additional / TODO

  ***Note on running tests:*** Tests will break on routes using useLoaderData. This repo is waiting on an official example from Kent C. Dodds.
  
- SASS/SCSS: It is possible to setup SASS/SCSS with this project, however with CSS variables and other modern APIs, vanilla CSS is usually enough. Reference [Best practices](https://remix.run/docs/en/v1/guides/styling#css-ecosystem-and-performance) & [Setting up SASS with Remix](https://devtools.tech/blog/setting-up-sass-with-remix-run---rid---lXDyMjDSdDZDXxNcJ2ep)
- [Optimistic UI](https://remix.run/docs/en/v1.1.3/guides/optimistic-ui). Remix can help you build optimistic UI with useTransition and useFetcher.
- SEO (sitemap). At the time of writing this, there is no native Remix method of generating a sitemap. There is ongoing discussion and potential options for current use [here](https://github.com/remix-run/remix/issues/741).
