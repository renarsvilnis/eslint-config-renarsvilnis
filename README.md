# eslint-config-renarsvilnis
Personal eslint configuration based on [semistandard](https://github.com/Flet/semistandard) which is based on [standard](https://github.com/feross/standard) for usage with [babel](http://babeljs.io/) and [react.js](http://facebook.github.io/react/)

> Updated to eslint `v2`.
> For now ussing `v.2.2.0` instead of the newest `v.2.3.0` because of a [bugs](https://github.com/eslint/eslint/issues/5493).
> Have dropped semi standart dependency, as it is outdated, and the library only consists of 3 lines

### Usage
1. Install the NPM module
```bash
# Add the configuration
npm i -D eslint-config-renarsvilnis

# Add all necessary peer dependencies for the configuration
npm i -D eslint babel-eslint eslint-config-standard eslint-plugin-babel eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

2. Add `.eslintrc` file into the root of your project
*Note:* Possible but frowned upon extending this configuration

```json
{
  "extends": ["renarsvilnis"]
}
```

### TODO
- Add customization like non-react, non-es6, similar as [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) does it
