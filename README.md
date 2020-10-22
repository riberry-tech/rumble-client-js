# Rumble Client

[![Package Version](https://img.shields.io/badge/Version-1.0.1-green.svg)]()
[![API](https://img.shields.io/badge/API%20Version-1.10.1-green.svg)]()
[![NSwag](https://img.shields.io/badge/NSwag-13.8.2.0-green.svg)]()
[![Commit](https://img.shields.io/badge/Commit%20ID-e2b2667-green.svg)]()

This is the typescript client for accessing Rumble restful API.

## How to release a new version

1. Commit the updated `rumble-client.ts` file directly to the `master` branch
2. In Riberry, update the line in `packages.json`  to `"rumble-client": "github:riberry-tech/rumble-client-js#master"`
3. Run `npm install` in Riberry, and test the updated package
4. If everything works, update the `README` file in this project
5. Create a new release
6. In Riberry, change the line in `packages.json`  to `"rumble-client": "github:riberry-tech/rumble-client-js#x.x.x"`