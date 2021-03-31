# CanadaHelps Front-End Development Guide
This is a development convention guide for building front-end applications and libraries to CanadaHelps standards.

## Getting Started

1. Get access to our private repository by adding your team or github account to our organization (you will need to discuss with a representative from CanadaHelps).
2. Choose one of the `app_template_*` folders as a base for building your application [React Guidelines](react-guidelines/) can help you decide. Typically we should be using the hooks template.
3. Go through the template and replace placeholders and uncomment sections as needed. These app_templates will not run automatically, you will need to do some work to get them up and running.
4. Familiarize yourself with our [JavaScript and TypeScript Conventions](js-ts-conventions) and make sure to get [prettier](https://prettier.io/) up and running with your IDE.
5. Build your application and issue a pull request against develop.

## Installing Packages

Run `npm i`

## Testing

Run `npm test` or `npm run watch:test` to start a jest test watcher. The [Testing Guide](tests-guidelines) has more details.

## Building

Run `npm run build:dev` for development builds and `npm run build` for production builds. You can also use the `npm run watch` command continuously build as you work.
The output should appear in a gitignored `dist` directory for your app.



