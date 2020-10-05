const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    important: true,
    purge: [
        './src/**/*.jsx',
        './src/**/*.js',
        './src/**/*.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
    ],
}
