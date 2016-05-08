# React YAGNI Starter Kit

Each directory has a `README.md` file documenting its purpose.

We assume the following:

  * We are using React
  * We are using `npm` to define dependencies
  * We are using `git` for version control
  * We are using a UNIX-ish OS that supports `cp` and `rm`
  * Source files go in `src`
  * Transpiled files get put in `build`

## Development

  1. `npm install`: Install the dependencies, both for production and development, as defined in `package.json`.
  2. `npm run dev`: Runs the development task.
  3. Open `build/public/index.html` in your browser.

## Tasks

`npm run copy`
: Copies static assets from `src/public` to `build/public`

`npm run build`
: Runs the copy task and bundles the JS source files into a single `bundle.js` file and puts it in `src/public/js`.

`npm run dev`
: Like the build task, but reruns every time a `.js` file changes.

`npm run clean`
: Removes the `build` folder.
