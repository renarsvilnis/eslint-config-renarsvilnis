module.exports = {
  // Dependencies
  // eslint - will need to include manualy
  // eslint-config-semistandard
  // eslint-plugin-babel
  // eslint-plugin-react
  // babel-eslint

  // Later for charable configs
  // Reference: http://eslint.org/docs/developer-guide/shareable-configs
  "extends": ["semistandard"],

  "ecmaFeatures": {
    "jsx": true
  },
  "plugins": [
    "standard",
    "babel",
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {

    // esling rules
    // Reference: http://eslint.org/docs/rules/
    // instead of using eslin rules we use semistandard

    // babel plugin
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 1,
    "babel/object-curly-spacing": 1,
    "babel/object-shorthand": 1,
    "babel/arrow-parens": 1,

    // react plugin
    // Reference: https://github.com/yannickcr/eslint-plugin-react
    "react/display-name": [2, {"acceptTranspilerName": true}],
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, {"location": "tag-aligned"}],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-max-props-per-line": [1, {"maximum": 1}],
    "react/jsx-no-duplicate-props": [2, {"ignoreCase": false}],
    "react/jsx-no-literals": 1,
    "react/jsx-no-undef": 2,
    "react/jsx-quotes": [2, "double", "avoid-escape"],
    "react/jsx-sort-prop-types": [1, {"ignoreCase": false}],
    "react/jsx-sort-props": [1, {"ignoreCase": true}],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 1,
    "react/wrap-multilines": 2
  }
};