# CanadaHelps Front-End Development Guide
This is a development convention guide for building front-end applications and libraries to CanadaHelps standards.

## Getting Started

1. Get access to our private repository by adding your team or github account to our organization (you will need to discuss with a representative from CanadaHelps).
2. Choose one of the `app_template_*` folders as a base for building your application. The [React Guidelines](react-guidelines/) can help you decide. Typically we should be using the hooks template.
3. Go through the template and replace placeholders and uncomment sections as needed. These app_templates will not run automatically, you will need to do some work to get them up and running.
4. Familiarize yourself with our [JavaScript and TypeScript Conventions](js-ts-conventions) and make sure to get [prettier](https://prettier.io/) up and running with your IDE.
5. Build your application and issue a pull request against develop.

## UI Common Config

One of the packages listed in the `app_template_*` package.json is `@canadahelps/ui-common-config`. This package contains NPM packages that we use for development (i.e. typescript, webpack, prettier, etc.) as well as configuration files for building and formatting your application. Once you have access to our private repos, you will have access to it and it will take care of a lot of configuration busy work.

## Installing Packages

Run `npm i`

## Testing

Run `npm test` or `npm run watch:test` to start a jest test watcher. The [Testing Guide](tests-guidelines) has more details.

## Building

Run `npm run build:dev` for development builds and `npm run build` for production builds. You can also use the `npm run watch` command continuously build as you work.
The output should appear in a gitignored `dist` directory for your app.


## Storybook

We often use storybook when we want to work without a backend and need to test out an interface or show just the UI to stakeholders. Below are steps you can follow to get storybook running with your application

### Packages

```shell
npm install --save-dev @storybook/react @storybook/addon-center
ed @storybook/addon-cssresources @storybook/addon-info @storybook/addon-knobs react-docgen-typescript-loader
```

#### Dependencies

You should have most of these already in your `package.json`. Babel packages typically come from the `CHOUI/canadahelps/package.json` file

* react
* react-dom
* @babel/core
* babel-loader

#### What they do

| Package                                                                                                  | Description                                                                                                          |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [@storybook/react](https://github.com/storybooks/storybook/tree/master)                                  | The core package                                                                                                     |
| [@storybook/addon-centered ](https://github.com/storybooks/storybook/tree/master/addons/centered )       | A decorator to center your stories                                                                                   |
| [@storybook/addon-cssresources](https://github.com/storybooks/storybook/tree/master/addons/cssresources) | Allows you to feed in some css like material icons or fontawesome                                                    |
| [@storybook/addon-info ](https://github.com/storybooks/storybook/tree/master/addons/info )               | Adds a PropType explorer                                                                                             |
| react-docgen-typescript-loader                                                                           | Used in combination with `@storybook/addon-info` to parse docgen style comments of our typescript props and dispatch |
| [@storybook/addon-knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)               | Exposes some variables to the storybook ui.                                                                          |

### Configuration

#### package.json script

```json
{
    ...
    "scripts": {
        ...
        "storybook": "start-storybook -p 9001 -c .storybook"
        ...
    },
    ...
}
```

This will start your story book on port `9001` taking the configuration from `.storybook` folder

#### .storybook folder

##### config.js

Set up of the storybook. Configure addons for all stories.

Points to the stories files to load. Currently anything ending with `*.stories.tsx` will be loaded as a story.

##### webpack.config.js

Configures webpack for Create React App (what story book uses to deploy itself)

We set babel loader's `rootMode: "upward"` so it looks for babel in `/canadahelps/node_modules`

Typescript to be handled by `awesome-typescript-loader` with `react-docgen-typescript-loader` to do the PropTypes exploration

Any aliases can also be set here

##### addons.js

This registers installed addons into the storybook panel

### Writing stories

Any file ending with `.stories.tsx` will be loaded as a story.

You can group your stories in `__stories__` folder

More info here: https://storybook.js.org/basics/writing-stories/
