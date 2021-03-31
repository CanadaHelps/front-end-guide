# React app template

## Storybook

Adding story book to your app

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
    //...
    "scripts": {
        //...
        "storybook": "start-storybook -p 9001 -c .storybook"
        //...
    },
    //...
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
