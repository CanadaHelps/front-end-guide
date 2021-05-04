Generated typescript api client by NSwag's openApiToTypeScriptClient (using fetch)

## Usage

## Generating a new version

**NOTE**: package version is API version

1. Download the OpenAPI spec and save it to `./src/swagger.json`
2. Bump the package.json version number to match OpenAPI spec
3. `npm publish`

### Under the hood

We use [NSwag's npm cli](https://github.com/RicoSuter/NSwag/wiki/CommandLine) to generate a typescript client using `config.nswag`. This outputs a single typescript file.

Then Babel transpiles it into the lib folder, along with type definitions using `tsc`

## Philosophy

This client was generated using OpenAPI 3.0 spec produced by SiteAPI using Swashbuckle (swagger).

The goal is to reduce the amount of manual code mapping written to communicate between JS(React) and C#(API)
