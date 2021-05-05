/* jshint node:true */
/* eslint-env node */

/*
 * With thanks to Kent C. Dodds who I mercilessly stole this from (https://gist.github.com/kentcdodds/e3f79584d7f255fbcf29)
 * This will look at the current version of all of your dependencies and update your package.json
 * with the explicit version that you currently have in node_modules, but with a ^ prefixed as we don't need to be that strict. 
 *
 */

const fs = require("fs");
const path = require("path");

const packageJson = require("./package.json");

const explicitifyDeps = (depsProperty) => {
  const deps = Object.keys(packageJson[depsProperty]);
  deps.forEach((dep) => {
    const depPackageJson = require("./node_modules/" + dep + "/package.json");
    packageJson[depsProperty][dep] = "^" + depPackageJson.version;
  });

  fs.writeFileSync(
    path.resolve(__dirname, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
};

explicitifyDeps("dependencies");
explicitifyDeps("devDependencies");

console.log("done!");
