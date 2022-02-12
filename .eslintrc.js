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
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": './',
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "ban-ts-ignore": 'off',
            },
            "extends": [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            "parserOptions": {
                "project": ['./tsconfig.json'],
            },
        }
    ]
}
