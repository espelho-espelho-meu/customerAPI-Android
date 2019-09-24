module.exports = {
    root: true,
    env: {
        node: true
    },
    parser: 'babel-eslint',
    extends: [
        'airbnb-base'
    ],
    plugins: [
        'promise'
    ],
    rules: {
        'func-names': 0,
        'global-require': 0,
        'import/no-dynamic-require': 0,
        'no-unused-vars': 0,
        'prefer-destructuring': 0,
        'no-console': 0
    }
}