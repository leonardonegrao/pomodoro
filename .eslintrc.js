module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest/globals": true
    },
    "extends": [ // extended rules, applied by default
        "plugin:react/recommended",
        "airbnb",
        "plugin:@next/next/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "tsconfigRootDir": "./"
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    },
    "plugins": [ // optionally applied rules
        "react",
        "@typescript-eslint",
        "import",
        "import-helpers",
        "jest"
    ],
    "rules": { // personalized config
      "import/no-extraneous-dependencies": ["off"],
      "react/require-default-props": ["off"],
      'react/jsx-props-no-spreading': ['off'],
      "react/react-in-jsx-scope": ["off"],
      "react/prop-types": ["off"],
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".tsx"] }],
      "jsx-quotes": ["error", "prefer-double"],
      "indent": ["error", 2],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "max-len": ["error", { "code": 120, "ignoreTrailingComments": true}],
      "no-undef": ["off"],
      "import/extensions": ["error", "ignorePackages", { "tsx": "never", "ts": "never" }],
      "import-helpers/order-imports": ["warn", {
        "newlinesBetween": "always",
        "groups": [
          "module",
          ["parent", "sibling", "index"],
          "/^@components/",
          "/^@models/",
          "/^@infra/",
          "/^@theme/",
          "/^@public/"
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        },
      }],
    }
};
