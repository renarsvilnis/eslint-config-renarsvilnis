# eslint-config-renarsvilnis
Personal eslint configuration based on [semistandard](https://github.com/Flet/semistandard) which is based on [standard](https://github.com/feross/standard) for usage with [babel](http://babeljs.io/) and [react.js](http://facebook.github.io/react/)

### Usage
1. Install the NPM module
```bash
# Add the configuration
npm i -D eslint-config-renarsvilnis

# Add all necessary dependencies for the configuration
npm i -D eslint babel-eslint eslint-config-semistandard eslint-plugin-babel eslint-plugin-react
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