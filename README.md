# Welcome to Remix!

This is a starter repo as an example to configure the project with 
- TypeScript
- ESLint
- Prettier
- Jest
- React-Testing-Library
- Misc. structural best practices.

If you know the target server (Netlify or Vercel for example), then see [DIY](#diy).

- [Remix Docs](https://remix.run/docs)

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
