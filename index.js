module.exports = {
  // Later for charable configs
  // Reference: http://eslint.org/docs/developer-guide/shareable-configs
  "extends": ["standard"],

  "ecmaFeatures": {
    "jsx": true
  },
  "plugins": [
    "standard",
    "babel",
    "react",
    "import"
  ],
  "parser": "babel-eslint",
  "rules": {

    // #########################################################################
    // esling rules
    // @ref http://eslint.org/docs/rules/
    // #########################################################################

    // instead of using configuring rules we use standard

    // enable back semicolons
    // instead of using semistandard dependency
    "semi": ['error', "always"],
    "no-extra-semi": 'error',
    "semi-spacing": ['error', { "before": false, "after": true }],

    // use double qoutes similar as html (pure preference)
    "jsx-quotes": ['error', "prefer-double"],

    // #########################################################################
    // babel plugin
    // #########################################################################
    "babel/generator-star-spacing": 'warn',
    "babel/new-cap": 'warn',
    "babel/object-curly-spacing": 'warn',
    "babel/object-shorthand": 'warn',
    "babel/arrow-parens": 'warn',

    // #########################################################################
    // react plugin
    // @ref https://github.com/yannickcr/eslint-plugin-react
    // #########################################################################
    "react/display-name": ['error', {"ignoreTranspilerName": false}],
    "react/jsx-boolean-value": ['warn', "never"],
    "react/jsx-closing-bracket-location": ['warn', {"location": "tag-aligned"}],
    "react/jsx-curly-spacing": ['error', "never"],
    "react/jsx-indent-props": ['warn', 'error'],
    "react/jsx-max-props-per-line": ['warn', {"maximum": 'error'}],
    "react/jsx-no-duplicate-props": ['error', {"ignoreCase": false}],
    "react/jsx-no-literals": 'warn',
    "react/jsx-no-undef": 'error',
    "react/jsx-uses-react": 'warn',
    "react/jsx-uses-vars": 'error',
    "react/no-danger": 'warn',
    "react/no-multi-comp": 'warn',
    "react/no-unknown-property": 'error',
    "react/prop-types": 'error',
    "react/react-in-jsx-scope": 'warn',
    "react/self-closing-comp": 'error',
    "react/sort-comp": 'warn',
    "react/jsx-wrap-multilines": 'error',
    // most of the state should be in your flux implementation, but there
    // are valid reasons for having state in components, just know what
    // your doing
    "react/no-set-state": 0,
    // keeping these as warning, any state changing in these could only happend
    // if an async action is sent, else there willbe layout trashing and
    // multiple render calls
    "react/no-did-mount-set-state": 'warn',
    "react/no-did-update-set-state": 'warn',

    // #########################################################################
    // import plugin
    // @ref https://www.npmjs.com/package/eslint-plugin-import
    // #########################################################################

    // For basic projects it is to much of a hustle to setup resolving if using
    // webpack, so be default disable this rule
    "import/no-unresolved": 'off',
    "import/no-extraneous-dependencies": 'off',
  }
};
