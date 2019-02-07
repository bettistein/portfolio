module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    parser: 'babylon',
    overrides: [
        {
            files: '**/*.js',
            options: {
                parser: 'babylon',
            },
        },
    ],
}
