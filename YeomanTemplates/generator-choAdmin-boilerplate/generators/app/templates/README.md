
# <App Name>

## Getting Started

### Setup

Run `npm install`

#### One time build

```bash
npm run build:dev
```

#### One time build (prod)

```bash
npm run build
```

#### Active development

```bash
npm run watch
```

## NPM Scripts

| script          | task                                                                      |
| --------------- | ------------------------------------------------------------------------- |
| `build-storybook`| builds storybook for mocking an interface                                |
| `build:dev`     | builds development artifacts one time                                     |
| `lint`          | runs eslint and fixes issues                                              |
| `lint:ci`       | runs eslint in a ci context and does not fix issues                       |
| `build`         | builds production artifacts                                               |
| `ci:all`        | runs all CI tasks, used by github actions                                 |
| `test:ci`       | runs test suite once with --ci --coverage flags                           |
| `test:coverage` | runs test suite once with --coverage flag                                 |
| `test:snapshots`| runs test suite once with --updateSnapshots flag                          |
| `test`          | runs test suite once                                                      |
| `tsc:ci`        | runs typechecking once                                                    |
| `watch`         | watches src for changes and rebuilds development artifacts                |
| `watch:test`    | watches src for changes and re-runs tests as necessary                    |
| `watch:tsc`     | starts a typechecking watcher                                             |

