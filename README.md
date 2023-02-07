# Rumble Client

[![Package Version](https://img.shields.io/badge/Version-2.0.0-green.svg)]()
[![API](https://img.shields.io/badge/API%20Version-1.13.6-green.svg)]()

This is the TypeScript client for accessing the Rumble RESTful API.


## Development

To issue a new version.

1. Update the `swagger.json` (built in`Rumble`).
2. Run `npm run build` to build the typescript file.
3. Run `npm run compile` to build the javascript file and the type definitions.
4. Run `npm run format` to run reformat the generated javascript file.

For simplicity, the `dist` folder is included in source control and this package can be installed using `github:riberry/rumble-client-js#{tag_or_branch_name}`


## TypeScript Template

We overrides the axios template for fixing some issues, primarily the bug that `JSON.parse` was used to decode `response.data` from `axios` while the response is already in JSON.

Furthermore, to improve the readability, many unused template blocks are removed, however, the modified now templates now will only work with `axios` template when `TypeStyle` set to `Interface` and `GenerateDtoGlass` not enabled.

The original templates can be found on [Github](https://github.com/RicoSuter/NSwag/tree/v13.16.1/src/NSwag.CodeGeneration.TypeScript/Templates), the tag name might need change if we upgrade `nswag` in the future.
