# Rumble Client

[![Package Version](https://img.shields.io/badge/Version-1.2.8-green.svg)]()
[![API](https://img.shields.io/badge/API%20Version-1.12.3-green.svg)]()
[![NSwag](https://img.shields.io/badge/NSwag-13.8.2.0-green.svg)]()

This is the TypeScript client for accessing the Rumble RESTful API.

## How to release a new version of this package

1. Commit the updated `rumble-client.ts` file directly to the `master` branch
2. (Optional) Test the updated file in Riberry by,
    1. updating the line in `packages.json`  to `"rumble-client": "github:riberry-tech/rumble-client-js#master"`
    2. running `npm install` and making sure the updated package work
3. Bump version in `packages.json` and update README file
4. Tag the commit and create a new release. Take a note of the tag name.
5. In Riberry, change the line in `packages.json`  to `"rumble-client": "github:riberry-tech/rumble-client-js#<tag-name>"`
