/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montez: ['Montez'],
            },
            colors: {
                black: '#191624',
                'purple-200': '#DAC7FC',
                'purple-300': '#CAACFF',
                'purple-500': '#6B49CD',
                'purple-700': '#5D0096',
                'purple-900': '#210035',
                'pink-500': '#AD26FF',
            },
            animation: {
                slideleft: 'slideleft .5s ease-in-out',
                slideright: 'slideright .5s ease-in-out',
            },
            keyframes: {
                slideleft: {
                    from: { opacity: 0, transform: 'translateX(-20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideright: {
                    from: { opacity: 0, transform: 'translateX(20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
