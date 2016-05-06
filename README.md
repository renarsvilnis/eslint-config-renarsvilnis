# eslint-config-renarsvilnis
Personal eslint configuration based on [Standard](https://github.com/Flet/semistandard), but with semicolons for usage with [babel](http://babeljs.io/) and [react.js](http://facebook.github.io/react/).


### Usage
1. Install the NPM module
```bash
# Install the configuration configuration
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
