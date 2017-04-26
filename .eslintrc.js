module.exports = {
  "extends": "eslint:recommended",
  "plugins": [
    "react", "jsx-a11y", "import"
  ],
  "env": {
    "node": true,
    "mocha": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "semi": 0
  }
}
