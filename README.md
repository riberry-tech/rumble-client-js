# Rumble Client

[![Package Version](https://img.shields.io/badge/Version-1.3.5-green.svg)]()
[![API](https://img.shields.io/badge/API%20Version-1.13.1-green.svg)]()

This is the TypeScript client for accessing the Rumble RESTful API.

## Development

1. Branching off `master` and update `rumble-client.ts` file.
2. Test the package
   1. Update `rumble-client` dependency in `package.json` of riberry to `"github:riberry-tech/rumble-client-js#{branch_name}"`
   2. Run `npm install` and start riberry to test the update
3. Merge the branch to `master`, bump the versions in:
   1. `package.json`
   2. `package-lock.json`
   3. `README.md`
4. Create a new release on github and update `rumble-client` dependency in `package.json` to `"rumble-client": "github:riberry-tech/rumble-client-js#{version}"`
