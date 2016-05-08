# React Starter Kid

A modular, no-nonsense starter kit for React which is extensively documented, almost as if talking to a child.

What we assume:

  * We are using React
  * We are using `npm` to define dependencies
  * We are using `git` for version control
  * We are using a UNIX-ish OS that supports `cp` and `rm`
  * We want to write modular code and are using `webpack` to bundle it into a single file.
  * Source files go in `./src`
  * Build files will be put into `./build`

What you get:

  * A minimal React web app setup (no server!)
  * Ability to write modular JavaScript code and bundle it into single file
  * Essential build tasks (including production builds)

## Basics

Before anything else, you should run `npm install` to install all dependencies, both for production and development, as defined in `package.json`. This will create the `node_modules` folder. This folder shouldn't be modified.

## Development

  1. `npm run dev`: Runs the development task.
  2. Open `build/public/index.html` in your browser.

You can now make modifications to the `.js` files and see the changes after reloading the page.

## Tasks

There are a number of (build-) tasks defined in `package.json`. You can run them using `npm run <taskname>`.

`npm run copy`
: Copies static assets from `src/public` to `build/public`

`npm run build`
: Runs the copy task and bundles the JS source files into a single `bundle.js` file and puts it in `src/public/js`.

`npm run dev`
: Like the build task, but reruns every time a `.js` file changes.

`npm run clean`
: Removes the `build` folder.

**Hint**: You can make a production build (minified bundle.js) by setting the environment variable `NODE_ENV` to `production`, i.e. run `NODE_ENV=production npm run build`.

## Dependencies

`react`
: The core react library, including general functionality like it's diffing algorithm.

`react-dom`
: The browser-specific parts of React.

### Development Dependencies

`webpack`
: Makes it possible to write modular JS and bundle it into a single file.
