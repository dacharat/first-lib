# First-lib
> Exercise in opensource club @Wongnai

### How to use
- `npm init` create a package.json file
- `npm i -D typescript` install Typescript
- `npx tsc --init` create tsconfig.json
- `npm run build` build lib file which support TS
- `npm run release -- patch` automated version bump `0.0.0` -> `0.0.1`
- `npm run release -- monor` automated version bump `0.0.0` -> `0.1.0`
- `npm run release -- major` automated version bump `0.0.0` -> `1.0.0`
- `npm publish` publish lib to npm