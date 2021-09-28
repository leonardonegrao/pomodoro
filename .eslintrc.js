module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "jest/globals": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": [ // optionally applied rules
      "react",
      "import-helpers",
      "@next/eslint-plugin-next",
      "jest"
    ],
    "extends": [ // extended rules, applied by default
      "plugin:react/recommended",
      "airbnb",
      "plugin:@next/eslint-plugin-next/recommended",
      "plugin:jest/recommended",
      "plugin:jest/style"
  ],
    "rules": {
      // eslint common rules
      "indent": ["error", 2],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "max-len": ["error", { "code": 120, "ignoreTrailingComments": true}],
      "no-undef": ["off"],
      // import rules
      "import/order": ["off"],
      "import/no-extraneous-dependencies": ["off"],
      "import/extensions": ["error", "ignorePackages", { "tsx": "never", "ts": "never" }],
      // react rules
      "react/require-default-props": ["off"],
      "react/jsx-props-no-spreading": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "react/prop-types": ["off"],
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".tsx"] }],
      "jsx-quotes": ["error", "prefer-double"],
      // import-helpers rules
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
    },
    "overrides": [
      {
        "files": "**/*.+(ts|tsx)",
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "sourceType": "module",
          "project": "./tsconfig.json",
          "tsconfigRootDir": "./"
        },
        "settings": {
          "import/resolver": {
            "typescript": {}
          }
        },
        "plugins": ["@typescript-eslint/eslint-plugin"],
        "extends": [
          "plugin:@typescript-eslint/eslint-recommended",
          "plugin:@typescript-eslint/recommended"
        ],
      }      
    ]
};
