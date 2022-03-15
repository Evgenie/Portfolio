module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": ["warn", {
            "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
          }],
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "extends": [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            "parserOptions": {
                "project": ['./tsconfig.json'],
            },
            "rules": {
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-empty-interface": "off",
            },
        }
    ]
}
