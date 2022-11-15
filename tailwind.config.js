/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montez: ['Montez'],
            },
            boxShadow: {
                'about-shadow':
                    '6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3)',
            },
            backgroundColor: {
                'banner-icon': 'hsla(0,0%,100%,.3)',
                'overlay-icon': 'rgba(0,0,0,.3)',
            },
            container: false,
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
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    '@media (min-width: 576px)': {
                        maxWidth: '540px',
                    },
                    '@media (min-width: 768px)': {
                        maxWidth: '720px',
                    },
                    '@media (min-width: 992px)': {
                        maxWidth: '960px',
                    },
                    '@media (min-width: 1200px)': {
                        maxWidth: '1140px',
                    },
                },
                '.row': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginLeft: '-15px',
                    marginRight: '-15px',
                },
                '.col': {
                    position: 'relative',
                    width: '100%',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                },
            });
        },
    ],
};
