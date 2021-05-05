"use strict";
const Generator = require("yeoman-generator");
const mkdirp = require("mkdirp");
const path = require("path");
const { mkdir } = require("fs");

module.exports = class extends Generator {
  // eslint-disable-next-line no-useless-constructor
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    const defaultFolderName = `default_folder`;
    const defaultPackageName = `default_package`;
    const defaultApplicationName = "choadmin-app";
    const prompts = [
      {
        type: "input",
        name: "folderName",
        message: `Folder name`,
        default: defaultFolderName,
      },
      {
        type: "input",
        name: "packageName",
        message: `NPM package name`,
        default: defaultPackageName,
      },
      {
        type: "input",
        name: "applicationName",
        message: `Client name`,
        default: defaultApplicationName,
      },
      {
        type: "input",
        name: "version",
        message: `Version`,
        default: "1.0.0",
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  configuring() {
    if (path.basename(this.destinationPath()) !== this.props.folderName) {
      this.log(
        `Your client must be inside a folder named ${this.props.folderName}\nI'll automatically create this folder.`
      );
      mkdirp(this.props.folderName);
      this.destinationRoot(this.destinationPath(this.props.folderName));
    }

    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("CHANGELOG.md"),
      this.destinationPath("CHANGELOG.md"),
      { apiVersion: this.props.version }
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      { applicationName: this.props.packageName }
    );

    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      {
        packageName: this.props.packageName,
        apiVersion: this.props.apiVersion,
        folderName: this.props.folderName
      }
    );
    this.fs.copyTpl(
      this.templatePath("babel.config.js"),
      this.destinationPath("babel.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("jest.config.js"),
      this.destinationPath("jest.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("jest.setup.js"),
      this.destinationPath("jest.setup.js")
    );
    this.fs.copyTpl(
      this.templatePath("package_version_explicitify.js"),
      this.destinationPath("package_version_explicitify.js")
    );
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js")
    );
    this.fs.copyTpl(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copyTpl(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );

    mkdirp("src");

    this.fs.copyTpl(
      this.templatePath("src/app.tsx"),
      this.destinationPath("src/app.tsx")
    );

    this.fs.copyTpl(
      this.templatePath("src/index.tsx"),
      this.destinationPath("src/index.tsx")
    );

    mkdirp("src/components");
    mkdirp("src/styles");
    this.fs.copyTpl(
      this.templatePath("src/index.tsx"),
      this.destinationPath("src/components/index.tsx")
    );
    this.fs.copyTpl(
      this.templatePath("src/index.tsx"),
      this.destinationPath("src/styles/index.tsx")
    );
  }

  install() {
    this.installDependencies({ bower: false, npm: true });
  }
};
