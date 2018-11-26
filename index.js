module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },

  // Later for charable configs
  // Reference: http://eslint.org/docs/developer-guide/shareable-configs
  extends: ["standard", "standard-jsx"],

  plugins: ["import", "node", "promise", "babel", "react", "standard"],
  parser: "babel-eslint",
  rules: {
    // #########################################################################
    // Cheatsheet
    // 0 - off
    // 1 - warn
    // 2 - error
    //
    // List of esling rules
    // @ref http://eslint.org/docs/rules/
    // #########################################################################

    // For base configuration we use standard - https://github.com/feross/standard

    // enable back semicolons
    // instead of using semistandard dependency
    semi: [2, "always"],
    "no-extra-semi": 2,

    // use double qoutes similar as html (pure preference)
    "jsx-quotes": [2, "prefer-double"],

    // Use babel
    "object-curly-spacing": "off",

    // #########################################################################
    // babel plugin
    // #########################################################################
    "babel/new-cap": 1,
    "babel/object-curly-spacing": 1,

    // #########################################################################
    // react plugin
    // @ref https://github.com/yannickcr/eslint-plugin-react
    // #########################################################################
    "react/display-name": [2, { ignoreTranspilerName: false }],
    "react/jsx-closing-bracket-location": [1, { location: "tag-aligned" }],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-max-props-per-line": [1, { maximum: 2 }],
    "react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
    "react/jsx-no-literals": 1,
    "react/jsx-uses-react": 1,
    "react/no-danger": 1,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 1,
    "react/sort-comp": 1,
    "react/jsx-wrap-multilines": 2,
    // most of the state should be in your flux implementation, but there
    // are valid reasons for having state in components, just know what
    // your doing
    "react/no-set-state": 0,
    // keeping these as warning, any state changing in these could only happend
    // if an async action is sent, else there willbe layout trashing and
    // multiple render calls
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,

    // #########################################################################
    // import plugin
    // @ref https://www.npmjs.com/package/eslint-plugin-import
    // #########################################################################

    // For basic projects it is to much of a hustle to setup resolving if using
    // webpack, so be default disable this rule
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,

    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    // Temporary fix for "TypeError: Cannot read property 'range' of null from template-curly-spacing"
    // Ref: https://github.com/babel/babel-eslint/issues/530
    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    "template-curly-spacing": "off",
    indent: "off"
  }
};
