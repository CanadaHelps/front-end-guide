# generator-cho-admin-app

> Yeoman generator to create and update canadahelps swagger/OpenAPI defined clients

## Installation

First, install [Yeoman](http://yeoman.io) and generator-chli using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install  yo
npm install  @canadahelps/generator-cho-admin-app
```
(You may need to install the above packages non-global and run them from an app directory instead)


Then generate new api client:

```bash
npx yo @canadahelps/cho-admin-app https://canadahelps.local/site/api/swagger/CharityRegistration/swagger.json
```

If you get certificate errors with generation because the generator can't reach the URL copy the contents of `swagger.json` to `/src/swagger.json` in the app you just generated. Then run npm run generate.

## Changelog

### [1.1.0]

#### Changed

- changed nswag's runtime to NetCore3.1

### [1.0.0]

#### Added

- Added create api-client generator
