
import { withCssResources } from "@storybook/addon-cssresources";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { create } from "@storybook/theming";

// the shotgun approach here, all the styles
import "../src/style/main.scss";
addDecorator(withCssResources);

addParameters({
  options: {
    theme: create({
      base: "dark",
      brandTitle: "App Template",
      brandUrl: "https://github.com/CanadaHelps/CHOUI/tree/master/docs/app_template",
    }),
    isFullscreen: false,
    panelPosition: "bottom",
  },
  cssresources: [
    {
      id: `fontawesome`,
      code: `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">`,
      picked: true,
    },
    {
      id: `materialicons`,
      code: `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`,
      picked: true,
    },
  ],
});

function loadStories() {
  const storyFiles = require.context("../src/", true, /\.stories.tsx$/);
  storyFiles.keys().forEach(filename => storyFiles(filename));
}

configure(loadStories, module);
