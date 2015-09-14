# eslint-config-renarsvilnis
Personal eslint configuration based on semistandard

### Usage
1. Add module
```bash
# Install this module
npm i -D eslint-config-renarsvilnis

# Add all necessary dependencies for the configuration
npm i -D eslint babel-eslint eslint-config-semistandard eslint-plugin-babel eslint-plugin-react
```

2. Add `.eslintrc` file into the root of your project
```json
{
  "extends": ["renarsvilnis"]
}
```

### TODO
- [ ] Add customization like non-react, non-es6, similar as (airbnb)[https://www.npmjs.com/package/eslint-config-airbnb] does it